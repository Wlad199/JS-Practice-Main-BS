<template>
	<form @submit.prevent="checkForm" class="'sign-up'">
		<div class="form-group">
			<label>
				Login:
				<input v-model="form.login" type="text">
			</label>
		</div>
		<div class="form-group">
			<label>
				Email:
				<input v-model="form.email" type="email">
			</label>
		</div>
		<div class="form-group">
			<label>
				Password:
				<input v-model="form.password" type="password">
			</label>
		</div>
		<div class="form-group">
			<label>
				Country of residence:
				<select v-model="form.country">
					<option v-for="(country, index) in countries" :value="country.value" :key="index">
						{{ country.label }}
					</option>
				</select>
			</label>
		</div>
		<div class="form-group">
			<label>
				Favotite Themes:
				<select id="themes" class="form-control" v-model="form.favoiriteThemes" multiple>
					<option v-for="(theme, index) in themes" :value="theme.value" :key="index">
						{{ theme.label }}
					</option>
				</select>
			</label>
		</div>
		<div class="form-group">
			<label>
				<input v-model="form.agreeWithSendNews" type="checkbox">
				Notify me about news
			</label>
		</div>
		<div class="form-group">
			<label>
				<input v-model="form.gendere" type="radio" value="male" name="sex">
				Man
			</label>
			<label>
				<input v-model="form.gendere" type="radio" value="female" name="sex">
				Woman
			</label>
		</div>
		<button>Save</button>
	</form>
</template>



<script setup>
import { ref, computed } from 'vue';
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'


const form = ref({
	login: '',
	email: '',
	password: '',
	country: 'Russia',
	favoiriteThemes: ['languages'],
	agreeWithSendNews: false,
	gendere: 'male'
})

const countries = ref([
	{
		label: 'Россия',
		value: 'Russia'
	},
	{
		label: 'Украина',
		value: 'Ukraine'
	},
	{
		label: 'США',
		value: 'USA'
	}
])

const themes = ref([
	{
		label: 'Технологии',
		value: 'IT'
	},
	{
		label: 'Языки',
		value: 'languages'
	},
	{
		label: 'Математика',
		value: 'mathematics'
	}
])

const rules = computed(() => {
	return {
		login: {
			simpleValidator(value) {
				console.log(value)
				return value.length > 5
			}
		}
	}
})


//const rules = {
//	//firstName: { required }, // Matches state.firstName
//	//lastName: { required }, // Matches state.lastName
//	//contact: {
//	//	email: { required, email } // Matches state.contact.email
//	//}

//	form: {
//		login: {
//			simpleValidator(value) {
//				console.log(value)
//				return value.length > 5
//			}
//		}
//	}

//	//login: { required }
//}

const v$ = useVuelidate(rules, form)

const checkForm = () => {
	this.$v.form.$touch()
	if (!this.$v.form.$error) {
		console.log('Валидация прошла успешно')
	}
}



</script>

<style></style>