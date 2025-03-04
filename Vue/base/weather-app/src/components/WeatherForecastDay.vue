

<template>
	<div class="forecast">
		<div>
			{{ new Date(day.date).toLocaleDateString('en-us', {
				weekday: 'long'
			}) }}
		</div>
		<div>
			<img :src="day.day.condition.icon" alt="icon">
		</div>
		<div>
			{{ Math.round(day.day.maxtemp_c) }} /
			{{ Math.round(day.day.mintemp_c) }}
		</div>
	</div>
</template>

<script setup lang='ts'>
import { IForecastDayItem } from "../types/weatherApi";

defineProps<{
	day: IForecastDayItem
}>()

</script>

<style scoped  lang='scss'>
.forecast {
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #55ac6e;
	margin: 5px;
}
</style>