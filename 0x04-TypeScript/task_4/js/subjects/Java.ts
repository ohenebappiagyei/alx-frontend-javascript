import { Subjects, Subject } from "./Subject";
import { Teacher } from "./Teacher";

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
