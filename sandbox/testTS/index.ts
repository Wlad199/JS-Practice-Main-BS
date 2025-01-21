
const pow = (a: number, b: number): number => {

	if (b === 1) {
		return a
	} else {
		return a * pow(a, b - 1)
	}

}

console.log(pow(3, 5))
