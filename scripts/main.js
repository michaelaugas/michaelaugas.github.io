let myHeading = document.querySelector("h1");
myHeading.textContent = "Bonjour le monde !";
let myImage = document.querySelector("img");
myImage.addEventListener("click", function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/pikatchu.jpg");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
});
let myButton = document.querySelector("button");

function setUserName() {
  let myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla is cool, " + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla is cool, " + storedName;
}

myButton.addEventListener("click", setUserName);