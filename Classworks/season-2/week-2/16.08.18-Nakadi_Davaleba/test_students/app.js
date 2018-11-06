const Student = require('../students.js');

let student = new Student(7, 'Vakho', 23);

student.addGrade(10);
student.addGrade(6);
student.addGrade(4);
student.addGrade(4);
console.log(student.computeGradesAverage());