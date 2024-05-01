/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />

namespace Subjects {
  export class Cpp extends Subject {
    getRequirements = () => 'Here is the list of requirements for Cpp';
    getAvailableTeacher = () => {
      if (!this.teacher?.experienceTeachingC) return 'No available teacher';
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}

export { Subjects };