<template>
	<p>About Page</p>
	<br>
	<button @click="increase">+++</button>
	<span>count: {{ count }}</span>
</template>

<script setup>
import { ref } from "vue"

let count = ref({
	name: 'Alex',
	age: 28
})

const increase = () => {
	//return count.age
	count.value.dad = 'Jhon'
	console.log(count.value)
}



</script>

<style></style>