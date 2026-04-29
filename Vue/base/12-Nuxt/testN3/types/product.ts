export interface IProduct {
	id: number,
	title: string,
	price: number,
	description: string,
	category: string,
	image: string,
	rating: {
		rate: number,
		count: number
	}
}

export interface IError {
	error: boolean,
	url: string,
	statusCode: number,
	statusMessage: string,
	message: string,
	data: string,
	stack: string
}