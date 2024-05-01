// Define the interfaces
interface MajorCredits {
    brand: 'MajorCredits'; // Unique identifier
    credits: number;
}

interface MinorCredits {
    brand: 'MinorCredits'; // Unique identifier
    credits: number;
}

// Define the functions
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    const totalCredits: number = subject1.credits + subject2.credits;
    return { brand: 'MajorCredits', credits: totalCredits };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    const totalCredits: number = subject1.credits + subject2.credits;
    return { brand: 'MinorCredits', credits: totalCredits };
}

// Test the functions
const subject1Major: MajorCredits = { brand: 'MajorCredits', credits: 3 };
const subject2Major: MajorCredits = { brand: 'MajorCredits', credits: 4 };

const subject1Minor: MinorCredits = { brand: 'MinorCredits', credits: 2 };
const subject2Minor: MinorCredits = { brand: 'MinorCredits', credits: 1 };

const totalMajorCredits = sumMajorCredits(subject1Major, subject2Major);
const totalMinorCredits = sumMinorCredits(subject1Minor, subject2Minor);

console.log('Total Major Credits:', totalMajorCredits);
console.log('Total Minor Credits:', totalMinorCredits);
