// Создать ф-ю, которая принимает 1 или 2 параметра и возвращает объект, подходящий под интерфейсы
// Создать перегрузки для каждого интерфейса

interface Square {
	side: number,
	area: number
}

interface Rect {
	a: number,
	b: number,
	area: number
}




















//todo

// Перегрузка
function calculateArea(side: number): Square
function calculateArea(a: number, b: number): Rect

function calculateArea(a: number, b?: number): Square | Rect {
	if (b) {
		const rect: Rect = {
			a: a,
			b: b,
			area: a * b
		}
		return rect
	} else {
		const square: Square = {
			side: a,
			area: a * a
		}
		return square
	}
}
