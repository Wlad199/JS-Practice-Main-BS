<template>
	<div class="weather-info-container">
		<!-- Wind speed -->
		<div>
			<p>{{ place.current.wind_kph }} km/h</p>
			<p>wind</p>
		</div>
		<!-- Humidity level -->
		<div>
			<p>{{ place.current.humidity }} %</p>
			<p>humidity</p>
		</div>
		<!-- Precipitation -->
		<div>
			<p>{{ place.current.precip_mm }} mm</p>
			<p>precipitation</p>
		</div>
		<!-- Wind direction -->
		<div>
			<p>{{ place.current.wind_dir }}</p>
			<p>direction</p>
		</div>
		<!-- Feels like -->
		<div>
			<p>{{ Math.round(place.current.feelslike_c) }}&deg</p>
			<p>Feels</p>
		</div>
		<!-- Last update and delete -->
		<div>
			<h3>last update: {{ place.current.last_updated }}</h3>
			<button>
			</button>
		</div>
	</div>
</template>

<script setup lang='ts'>
import { IWeatherApi } from "../types/weatherApi";

defineProps<{
	place: IWeatherApi
}>()
</script>

<style scoped  lang='scss'>
.weather-info-container {
	display: flex;
	flex-wrap: wrap;

	div {
		flex: 1 1 auto;
		background-color: #a0a0a0;
		margin: 3px;
		text-align: center;
	}
}
</style>