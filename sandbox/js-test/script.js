function sortByLength(array) {
	return array.sort((a, b) => b.length - a.length)
}

console.log(sortByLength([["Beg", "Life", "I", "To"]]))
