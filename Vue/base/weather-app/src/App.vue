<template>
	<div class="container">

		<!-- Date -->
		<div class="weather__date">
			{{ new Date().toLocaleDateString('en-us', {
				weekday: 'long',
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			}) }}
		</div>

		<SearchInput />
		<div
			class="weather-card-wrapper">
			<WeatherCard
				v-for="(place, idx) in weatherStore.places"
				:key="idx"
				:place="place" />
		</div>
	</div>
</template>

<script setup lang="ts">
import SearchInput from "@/components/SearchInput.vue";
import WeatherCard from "./components/WeatherCard.vue";
import { useWeatherStote } from "./stores/todoStore";

const weatherStore = useWeatherStote()

</script>

<style scoped>
.weather-card-wrapper {
	display: flex;
}
</style>

