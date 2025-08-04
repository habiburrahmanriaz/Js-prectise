let students = ["shakil", "jamil", "rony", "kamal", "nayeem"];

let studentlist = document.getElementById("studentlist");


students.forEach(function (student) {
  let li = document.createElement("li");
  li.textContent = student;
  studentlist.appendChild(li);
});


//studentlist.appendChild(studentlist);
