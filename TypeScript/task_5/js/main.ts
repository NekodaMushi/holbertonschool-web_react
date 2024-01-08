export interface MajorCredits {
	credits: number;
	brand: string;
}

export interface MinorCredits {
	credits: number;
	prop: string;
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits) {
	return subject1.credits + subject2.credits;
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits) {
	return subject1.credits + subject2.credits;
}

/*const minor1: MinorCredits = {
	credits: 20,
	prop: 'petit',
}
const minor2: MinorCredits = {
	credits: 25,
	prop: 'petit',
}

const major1: MajorCredits = {
	credits: 50,
	brand: 'grand',
}
const major2: MajorCredits = {
	credits: 55,
	brand: 'grand',
}

console.log(sumMinorCredits(minor1, minor2));
console.log(sumMajorCredits(major1, major2));*/
