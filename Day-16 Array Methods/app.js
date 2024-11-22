let students = ["Habib", "Jubayer", "Helal", "Abdullah"];

// students.push('siam) Add item at the end of the array list

// students.unshift('siam') add item at the begining of the array list

// students.shift() remove item from the begining of the array list

// students.pop() remove item from the ind of the array list

// students.indexOf("Jubayer") index of list item

// students.splice(indexNumber, 1);remove items from the array list

let indexOfJubayer = students.indexOf("Jubayer");

students.slice(indexOfJubayer, 1);
console.log(students);
 