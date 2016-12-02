// If either of the input fields does not have a value in it when the user presses
// the enter key, or presses the button, then display an alert stating that both fields
// must have a value.
function checkInput () {
  event.preventDefault();
  if (document.getElementById("height").value === "") {
      alert("Both fields must have a value");
  } else if (document.getElementById("char").value === "") {
      alert("Both fields must have a value");
    } else {
        // It accepts a single object as an argument. The object should have two key/value pairs.
        var treeDetails = {
        // A key that specifies the height of the pine tree.
        // A key that specifies which character to use to build the pine tree.
            height:"";
            char:"";
        }
        // The value for the height of the tree should be from user input in a <input type="text"> field in the DOM.
