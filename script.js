import * as controller from './js/controller';

// BUTTONS
controller.init();
const logout = document.querySelector(".log-out-btn");
const search = document.querySelector(".btnsearch");
const sortByName = document.querySelector(".sortbyname");
const sortByDate = document.querySelector(".sortbydate");
const title = document.querySelector(".post-title");
const upload = document.querySelector(".upload-button");
const signin = document.getElementById("#signin-btn");
const signup = document.getElementById("#signup-btn");
const switchToSignIn = document.querySelector(".switch-to-signin-btn");
const switchToSignUp = document.querySelector(".switch-to-signup-btn");
const edit = document.querySelector(".editbtn");
const del = document.querySelector(".deletebtn");
const logo = document.querySelector(".blog-logo");
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

