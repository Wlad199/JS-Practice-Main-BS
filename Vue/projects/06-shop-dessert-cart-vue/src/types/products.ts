export interface IProduct {
	"image": IImage,
	"name": string,
	"category": string,
	"price": number,
	"id": string,
	"quantity": number
}

interface IImage {
	"thumbnail": string,
	"mobile": string,
	"tablet": string,
	"desktop": string
}