const a = [1, 2, 3, 4, 5]
let c = 'string'

//const b = a.map(item => {
//	return item * 2
//})

const b = Array.prototype.map.call(c, item => item).reverse().join('')

console.log(a)
console.log(b)