// If either of the input fields does not have a value in it when the user presses
// the enter key, or presses the button, then display an alert stating that both fields
// must have a value.
function checkInput () {
  event.preventDefault();
  if (document.getElementById("height").value === "") {
      alert("Both fields must have a value");
  } else if (document.getElementById("char").value === "") {
      alert("Both fields must have a value");
    }
    else {
        // It accepts a single object as an argument. The object should have two key/value pairs.
        var treeDet = {
        // A key that specifies the height of the pine tree.
          // A key that specifies which character to use to build the pine tree.
            height:"",
            char:""
        }
        // 1. The value for the height of the tree should be from user input in a `<input type="text">` field in the DOM.
        treeDet.height = document.getElementById("height").value;
        // 1. The character to use should be from user input in a `<input type="text">` field in the DOM.
        treeDet.char = document.getElementById("char").value;

        tree(treeDet);
    }
}
// Create a `tree` function that should build a pine tree out of a character in the Chrome dev tools console.
function tree (treeDet) {
  for (var i = 0; i < treeDet.height; i++) {
    console.log(' '.repeat((treeDet.height-1)-i) + treeDet.char.repeat(2*i + 1) + '\n');
  }
}

function enterCheck (keyboardEvent) {
  event.preventDefault();
  console.log(keyboardEvent)
  if (keyboardEvent.key === "Enter") {
    checkInput();
  }
}
// Once the user enters in a number, and a character, the user can either then just
//press the enter key _(as long as the cursor is in one of the input fields)_, or click
//a button that is labeled "Grow your tree" and the tree should be shown in the console.
//This requires you to add an event listener to the button, as well as an event listener for the enter/return key.

var button = document.getElementById("button");
button.addEventListener('click', checkInput);
var heightEnter = document.getElementById("height");
var charEnter = document.getElementById("char");
heightEnter.addEventListener('keyup', enterCheck);
charEnter.addEventListener('keyup', enterCheck);
