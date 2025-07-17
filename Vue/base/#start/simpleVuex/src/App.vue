<template>
	<div class="container">
		<input
			type="text"
			v-model="store.state.inputValue">
		<ul>
			<li v-for="todo in fromGetter">
				<span>{{ todo.text }}</span>
			</li>
		</ul>
		<ul>
			<li v-for="todo in filteredTodos">
				<span>{{ todo.text }}</span>
			</li>
		</ul>
		<ScaleLoader
			:loading="isLoading"
			:height="spinnerHeight"
			:width="spinnerWidth"
			:radius="spinnerRadius"
			:margin="spinnerMargin" />
	</div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue';

const store = useStore()
const fromGetter = computed(() => store.getters.allTodos)
const onlyOddIdTodos = computed(() => store.getters.onlyOddIdTodos)
const filteredTodos = computed(() => store.getters.filteredTodos)

const isLoading = ref(true);
const spinnerColor = ref('#fdbb00'); // Синий цвет
const spinnerHeight = ref('80px'); // Высота линии спиннера
const spinnerWidth = ref('40px'); // Ширина линии спиннера
const spinnerRadius = ref('2px'); // Радиус округления кончика линии
const spinnerMargin = ref('2px'); // Отступ между линиями спиннера

</script>

<style scoped lang='scss'></style>