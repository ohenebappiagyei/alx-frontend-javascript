interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const students: Student[] = [
    { firstName: 'John', lastName: 'Doe', age: 20, location: 'New York' },
    { firstName: 'Jane', lastName: 'Smith', age: 22, location: 'Los Angeles' }
];

function renderTable(students: Student[]): void {
    console.log('| FirstName | Location    |');
    console.log('|-----------|-------------|');
    students.forEach(student => {
        console.log(`| ${student.firstName.padEnd(10)} | ${student.location.padEnd(11)} |`);
    });
}

renderTable(students);
