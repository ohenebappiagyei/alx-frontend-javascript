/// <reference path="Teacher.ts" />

namespace Subjects {
  export class Subject {
    teacher: Teacher;

    setTeacher = (teacher: Teacher) => {
      this.teacher = teacher;
    }
  }
}

export { Subjects }; // Export the namespace
