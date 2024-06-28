
export function generateKey(user){
	return `${user.name}_${user.surname}_${user.age}`
}