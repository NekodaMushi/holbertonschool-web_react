export interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

export interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
	workFromHome(): string {
		return 'Working from home';
	}

	getCoffeeBreak(): string {
		return 'Getting a coffee break';
	}

	workDirectorTasks(): string {
		return 'Getting to director tasks';
	}
}

export class Teacher implements TeacherInterface {
	workFromHome(): string {
		return 'Cannot work from home';
	}

	getCoffeeBreak(): string {
		return 'Cannot have a break';
	}

	workTeacherTasks(): string {
		return 'Getting to work';
	}
}
interface createEmployeeInterface {
	(salary: string | number): Director | Teacher
}

const createEmployee: createEmployeeInterface = function (salary: number | string) {
	if (typeof salary == 'number' && salary < 500) {
		return new Teacher;
	}
	return new Director;
}

export function isDirector(employee: object) {
	return employee.constructor.name;
}

export function executeWork(employee: object) {
	const type = isDirector(employee);
	let obj;
	if (type === 'Director') {
		obj = new Director;
		return obj.workDirectorTasks();
	}
	if (type === 'Teacher') {
		obj = new Teacher;
		return obj.workTeacherTasks();
	}
}

export type Subjects = 'Math' | 'History';

export function teachClass(todayCalss: Subjects) {
	if (todayCalss === 'Math') {
		return 'Teaching Math';
	}
	if (todayCalss === 'History') {
		return 'Teaching History';
	}
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));
console.log(teachClass('Math'));
console.log(teachClass('History'));

