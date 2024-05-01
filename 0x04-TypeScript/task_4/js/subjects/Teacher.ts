namespace Subjects {
    export class Teacher {
        firstName: string;
        lastName: string;
        experienceTeachingC?: number;
        experienceTeachingJava?: number;
        experienceTeachingReact?: number;

        constructor(firstName: string, lastName: string) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }
}

export { Subjects }; // Export the namespace
