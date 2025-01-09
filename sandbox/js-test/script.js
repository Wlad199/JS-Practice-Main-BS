
(async () => {
	fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
		.then(response => response.json())
		.then(data => console.log(data))
})()

