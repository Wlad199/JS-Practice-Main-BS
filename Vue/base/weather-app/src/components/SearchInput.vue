<template>
	<div>
		<!-- search field -->
		<form @submit.prevent>
			<div>
				<i></i>
				<input
					v-model="weatherStore.query"
					@input="weatherStore.handleSearch"
					type="text"
					placeholder="Search for a place" />
			</div>
		</form>
		<!-- search suggestions -->
		<div>
			<div v-if="weatherStore.results.length">
				<div v-for="place in weatherStore.results" :key="place.id">
					<button @click="weatherStore.getWeather(place.id)">
						{{ place.name }} ({{ place.region }}, {{ place.country }})
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang='ts'>
import { useWeatherStote } from "../stores/todoStore"

const weatherStore = useWeatherStote()
</script>

<style scoped  lang='scss'></style>