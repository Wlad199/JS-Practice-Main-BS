<template>
	<div class="weather-card" :class="place.current.is_day === 1 ? 'bg-day' : 'bg-night'">
		<!-- Location & time -->
		<div>
			<div>
				<i></i>
				<h1>{{ place.location.name }}</h1>
			</div>
			<div>
				<i></i>
				<h1>
					{{ new Date(place.location.localtime).getHours() }} :
					{{ new Date(place.location.localtime).getMinutes() }}
				</h1>
			</div>
			<button
				@click="weatherStore.deleteWeatherCard(place.location.name)">
				delete
			</button>
		</div>

		<!-- current weather -->
		<div>
			<img :src="place.current.condition.icon" alt="icon" width="200" />
			<h1>{{ Math.round(place.current.temp_c) }}&deg</h1>
			<p>{{ place.current.condition.text }}</p>
		</div>


		<!-- forecast -->
		<div>
			<WeatherForecastDay
				v-for="(day, idx) in place.forecast.forecastday"
				:key="idx"
				:day="day" />
		</div>

		<!-- info -->
		<div>
			<WeatherInfo
				v-show="showDetailCard"
				:place="place" />
		</div>

		<!-- forecast btn -->
		<div>
			<button
				@click="showDetailCard = !showDetailCard">
				{{ showDetailCard ? 'Close' : 'More' }}
			</button>
		</div>
	</div>
</template>

<script setup lang='ts'>
import { IWeatherApi } from "../types/weatherApi";
import WeatherForecastDay from "./WeatherForecastDay.vue";
import WeatherInfo from "./WeatherInfo.vue";
import { useWeatherStote } from "../stores/todoStore";
import { ref } from "vue";

const weatherStore = useWeatherStote()
const showDetailCard = ref<boolean>(false)

defineProps<{
	place: IWeatherApi
}>()


</script>

<style scoped  lang='scss'>
.weather-card {
	width: 300px;
	background-color: #269546;
	margin: 5px;
}

.weather-card.bg-day {
	background-color: #8ec5fc;
	background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
}

.weather-card.bg-night {
	background-color: #07223d;
	background-image: linear-gradient(62deg, #0a2a4a 0%, #270845 100%);
	color: #fff;
}
</style>