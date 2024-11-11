// user values
let userName = document.getElementById("username");
let password = document.getElementById("password");
let submitBtn = document.getElementById("submit");

//Database info
let myUser = 12345;
let myPass = "pass";

submitBtn.addEventListener('click', function () {
  if (userName.value == myUser && password.value == myPass) {
    console.log("Yes");
  } else {
    console.log("NO");
  }
});


