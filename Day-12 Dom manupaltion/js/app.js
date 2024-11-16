let userName = document.getElementById("name");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let password = document.getElementById("password");
let submitBtn = document.getElementById("submit-btn");
let errorTag = document.getElementById("error")

// all input
let allInputs = document.querySelectorAll("input");

// Evant listner
submitBtn.addEventListener("click", function () {
  // Check blank fields
  if (userName.value == "" ||
    phone.value == "" ||
    email.value == "" ||
    password.value == ""
  ) {
    // alert("Field can't be empty!")
    // errorTag.innerHTML = "Field can't be empty!";
    showError("Field can't be empty!");
    return;
  }

  // Name length check
  if (userName.value.length < 5) {
    // alert("Name length should be more than 5 laters.");
    // errorTag.innerHTML = "Name length should be more than 5 laters.";
    showError("Name length should be more than 5 laters.");
    return;
  }

  // Phone length check
  if (phone.value.length != 11) {
    // alert('Phone number must be in 11 digits!');
    // errorTag.innerHTML = "Phone number must be in 11 digits!";
    showError("Phone number must be in 11 digits!");
    return;
  }

  // Password length check
  if (password.value.length < 8) {
    // alert("Password length should more than 7 char");
    // errorTag.innerHTML = "Password length should more than 7 char";
    showError("Password length should more than 7 char");
    return;
  }
});

// Show error
function showError(errorText) {
  errorTag.innerHTML = errorText;
}

// Hide error
function hideError() {
  errorTag.innerHTML = "";
}

// Add keydown event to all inputs
allInputs.forEach(function (item) {
  item.addEventListener('keydown', function () {
    hideError();
  })
})