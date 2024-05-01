/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />

namespace Subjects {
  export class JavaClass extends Subject {
    getRequirements = () => 'Here is the list of requirements for Java';
    getAvailableTeacher = () => {
      if (!this.teacher?.experienceTeachingJava) return 'No available teacher';
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}

export { Subjects };
