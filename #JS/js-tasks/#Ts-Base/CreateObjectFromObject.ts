// Создать объект mainProject на базе объекта department
// Написать ф-ю transformDepartment, которая принимает department и число
// const mainProject = transformDepartment(department, 1000)
// Созданный объект должен соответствовать интерфейсу Project

interface Department {
	name: string,
	budget: number
}

const department: Department = {
	name: 'web-department',
	budget: 50000
}

interface Project {
	name: string,
	projectBudget: number
}




















//todo solve =================//
// Создаем ф-ю, которая принимает объект с интефейсом Department и число денег,
// И возвращает объект нужного интерфейса (Project)
function transformDepartment(department: Department, amount: number): Project {
	return {
		name: department.name,
		projectBudget: amount
	}
}

const mainProject = transformDepartment(department, 1000)
console.log(mainProject)