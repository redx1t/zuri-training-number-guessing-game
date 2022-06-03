// Create a number guessing game to generate a number between the range of 1 and 2.
// The game should prompt users for their username (saved in cookie).
// Set range as function parameter and prompt the player to predict the generated number between the given range
// , at a correct guess, the game should award the player a point (also saved in cookie), and move them to stage 2
//  by increasing the range limit value by 1, e.g range is from 1 and 3 for stage 2 and so on.
// Connect replit account to github and save your program in github.

var correct_answer = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function guessing_game() {
  var min = 1;
  var max = 2;
  var status = true;
  var points = 0;
  var username = prompt("Please enter your username", "");
  if (username == null || username == "") {
    return "please enter your username to play";
  }
  var setCookie = (username, points) => {
    document.cookie = `username=${encodeURIComponent(username)};`;
    document.cookie = `points=${encodeURIComponent(points)};`;
  };
  while (status) {
    var choice = prompt(`Select a number between ${min} and ${max}`);
    if (choice == correct_answer(min, max)) {
      max++;
      points++;
      console.log(points + " - " + username);
      console.log(document.cookie);
      window.alert("you win!!!");
    } else {
      status = false;
      window.alert("you lose!!!");
    }
  }
  setCookie(username, points);
  return document.cookie;
}

guessing_game();
