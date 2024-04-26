import { listOfStudents } from "./9-hoisting.js";

const listPrinted = listOfStudents.map(
    student => student.fullStudentDescription
);

console.log(listPrinted);
