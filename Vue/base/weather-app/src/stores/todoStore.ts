import axios from "axios"
import { defineStore } from "pinia"
import { ref } from "vue"
import ICity from "../types/city";
import { IWeatherApi } from "../types/weatherApi";

export const useWeatherStote = defineStore('weatherStore', () => {

	const query = ref<string>('')
	const results = ref<ICity[]>([])
	const places = ref<IWeatherApi[]>([])

	const timeOut = ref(null)

	const CITY_URL = 'http://api.weatherapi.com/v1/search.json?key=e06a680c7a934767860155344252402'
	const WEATHER_URL = 'http://api.weatherapi.com/v1/forecast.json?key=e06a680c7a934767860155344252402'

	const handleSearch = () => {
		clearTimeout(timeOut.value)
		timeOut.value = setTimeout(async () => {
			if (query.value !== '') {
				const response = await axios(`
					${CITY_URL}&q=${query.value}
				`)
				results.value = response.data
			} else {
				results.value = []
			}
		}, 500)
	}

	const getWeather = async (id: number) => {
		const response = await axios(`${WEATHER_URL}&q=id:${id}&days=3&aqi=no&alerts=no`)
		const data = response.data
		places.value.push(data)

		query.value = ''
		results.value = []
	}

	const deleteWeatherCard = (name: string) => {
		places.value = places.value.filter(place => place.location.name !== name)
	}

	return {
		query,
		results,
		places,

		handleSearch,
		getWeather,
		deleteWeatherCard,
	}
})