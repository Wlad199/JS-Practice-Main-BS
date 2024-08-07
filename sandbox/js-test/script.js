
newPost = { userId: 10, id: 101, title: 'This is my first post', body: 'post text' }

fetch('https://jsonplaceholder.typicode.com/posts', {
	method: 'POST',
	body: newPost
})