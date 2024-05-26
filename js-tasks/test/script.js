let object = {
	name: 'Alex',
	showName: () => {
		return `Hello ${this.name}`
	}
}


console.log(object.showName())