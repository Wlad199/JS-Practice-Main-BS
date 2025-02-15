<template>
	<form @submit.prevent>
		<input type="text" v-model="state.name">
		<input type="email" v-model="state.emailAddress">
		<button>Submit</button>
	</form>
	<div>
		<p>{{ state.name }}</p>
		<p>{{ state.emailAddress }}</p>
	</div>
</template>

<script>
import { reactive } from 'vue' // or '@vue/composition-api' in Vue 2.x
import { useVuelidate } from '@vuelidate/core'
import { email, required } from '@vuelidate/validators'

export default {
	setup() {
		const state = reactive({
			name: '',
			emailAddress: ''
		})
		const rules = {
			//name: { required },
			emailAddress: { required, email },
			name: {
				simpleValidator(value) {
					console.log(value)
					return value.length > 5
				}
			},
		}


		//const v = useVuelidate(rules, state, { $lazy: true })
		const v$ = useVuelidate(rules, state, { $lazy: true })


		return { state, v$ }
	}
}
</script>

<style></style>