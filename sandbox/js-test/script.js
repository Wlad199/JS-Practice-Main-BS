function getTreeValues(tree) {
	const values = []

	const traverse = (node) => {
		if (node) {
			values.push(node.value)
			if (node.children) {
				for (let child of node.children) {
					traverse(child)
				}
			}
		}
	}
	traverse(tree)
	return values.sort((a, b) => a - b)
}


console.log(getTreeValues({
	value: 1,
	children: [
		{
			value: 2,
			children: [
				{ value: 4 },
				{ value: 5 },
			]
		},
		{
			value: 3,
			children: [
				{ value: 6 },
				{ value: 7 },
			]
		}
	]
}))