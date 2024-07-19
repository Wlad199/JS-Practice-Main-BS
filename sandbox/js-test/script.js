let json = '{ "age": 30 }'

try {
	try {
		json = JSON.parse(json)
		if (!json.name) {
			throw new Error('There is no name!')
		}
	} catch (err) {
		if (err instanceof SyntaxError) {
			console.warn(err.message)
		} else {
			throw (err)
		}
	}
} catch (err) {
	console.log(err)
}