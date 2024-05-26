// Создать два интерфейса Car (engine, wheels) и Ship (engine, sail)
// Создать ф-ии (type guard) isCar и isShip, которые по интерфейсу проверяют
// к какому объекту относится эта сущность.
// Создать ф-ию repairVehicle, которая выводит особые свойства объекта

























// todo ansver =================//

interface Car {
	engine: string,
	wheels: number
}

interface Ship {
	engine: string,
	sail: string
}

function isCar(car: Car | Ship): car is Car {
	return 'wheels' in car
}

function isShip(ship: Car | Ship): ship is Ship {
	return 'sail' in ship
}

function repairVehicle(vehicle: Ship | Car) {
	if (isCar(vehicle)) {
		return vehicle.wheels
	} else if (isShip(vehicle)) {
		return vehicle.sail
	} else {
		return 'nothing'
	}
}

const myCar: Ship = {
	engine: 'v8',
	sail: 'some text'
}

console.log(repairVehicle(myCar))