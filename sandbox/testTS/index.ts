

const getParams = (query: string) => {
	let a = query.split('&')
	const res: any = {}

	const result = a.reduce((acc, part) => {
		const [key, value] = part.split('=')
		acc[key] = value
		return acc
	}, res)

	return result
}


console.log(getParams('per=10&page=5'))
