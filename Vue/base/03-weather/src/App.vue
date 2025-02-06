
<template>
	<h1>Weather app</h1>
	<p>Show weather in {{ city === '' ? 'your city' : cityName }}</p>
	<input v-model="city" type="text" placeholder="Your city">
	<button @click="getWeather()">Get weather</button>
	<p class="error">{{ error }}</p>
	<div v-if="info !== null">
		<p>{{ showTemp }}</p>
	</div>
</template>


<script>
import axios from 'axios'

export default {
	data() {
		return {
			city: '',
			error: '',
			info: null
		}
	},
	computed: {
		cityName() {
			return '< ' + this.city + ' >'
		},
		showTemp() {
			return `Temperature: ${this.info.temp} \`C`
		}
	},
	methods: {
		getWeather() {
			if (this.city.trim().length < 2) {
				this.error = 'Too little name'
				return false
			}
			this.error = ''
			axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=0941f0c14ffeeab6aff5769e20f9d30a`)
				.then(res => this.info = res.data.main)
		}
	}
}
</script>

<style scoped>
.error {
	color: red;
}
</style>
