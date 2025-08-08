var Inputelm = document.getElementById('student-name');
var addbtn = document.getElementById('add-item');
var addul = document.getElementById('student-list');


addbtn.addEventListener('click', function () {
  if (Inputelm.value) {
    var createli = document.createElement("li");
    createli.textContent = Inputelm.value;
    addul.appendChild(createli);
    Inputelm.value = "";
  } else {
    alert("hgfh")
  }
})