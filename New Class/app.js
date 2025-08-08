var Inputelm = document.getElementById('student-name');
var addbtn = document.getElementById('add-item');
var addul = document.getElementById('student-list');


addbtn.addEventListener('click', function(){
  if (Inputelm.value) {
    var licreate = document.createElement('li');
    licreate.textContent = Inputelm.value;
    addul.appendChild(licreate);
    Inputelm.value = "";
  } else {
    alert("Kicho nai")
  }
});