export type User = {
	name: string,
	age: number,
	occupation: string
}

export const users: unknown[] = [
	{
		name: 'Max Mustermann',
		age: 25,
		occupation: 'Chimney sweep'
	},
	{
		name: 'Kate Müller',
		age: 23,
		occupation: 'Astronaut'
	}
];

export function logPerson(user: User) {
	console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);