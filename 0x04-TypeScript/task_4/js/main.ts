import { Cpp } from './subjects/Cpp';
import { JavaClass } from './subjects/Java';
import { ReactClass } from './subjects/React';
import { Teacher } from './subjects/Teacher';

// Create and export constants for Cpp, Java, and React subjects
export const cpp = new Cpp();
export const java = new JavaClass();
export const react = new ReactClass();

// Create and export a Teacher object cTeacher with experienceTeachingC = 10
export const cTeacher: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    experienceTeachingC: 10,
};

// For Cpp subject
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// For Java subject
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// For React subject
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
