var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelectorAll("li");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  //creates buttons
  var button = document.createElement("button");
  button.innerHTML = "Delete";
  li.appendChild(button);
  // removes element
  button.addEventListener("click", function () {
    li.parentNode.removeChild(li);
  });
  //continue code
  ul.appendChild(li);
  input.value = "";

}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function toggleClassDoneOnAndOff(event) {
  event.currentTarget.classList.toggle("done");
}

Array.from(list).forEach(function (element) {
  var button = document.createElement("button");
  //creates buttons
  button.innerHTML = "Delete";
  element.appendChild(button);
  // removes element
  button.addEventListener("click", function () {
    element.parentNode.removeChild(element);
  });
});

for (var i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function (event) {
    toggleClassDoneOnAndOff(event);
  });
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress)