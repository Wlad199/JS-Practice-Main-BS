<template>
	<h1>About</h1>
	<button @click="() => navigateTo('/')">About</button>
	<p>{{ useState('username') }}</p>
	<p>{{ count }}</p>
	<button @click="increment">++</button>
	<House />
</template>

<script setup lang='ts'>


useHead({
	title: 'this is about'
})

let name = useState('username', () => 'Alex')
const count = useState('myCount', () => 10)

const increment = () => count.value++

</script>

<style scoped lang='scss'></style>