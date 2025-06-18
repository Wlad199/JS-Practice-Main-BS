function isIsogram(str) {
	str = str.toLowerCase()
	const mySet = new Set(str)
	return str.length === mySet.size
}

console.log(isIsogram("Девстанция"))