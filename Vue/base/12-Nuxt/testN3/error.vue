<template>
	<div>
		<p>{{ error.statusCode }}</p>
		<p>Oppps!</p>
		<p>{{ error.message }}</p>
		<button @click="handleClearError">Go Home</button>
	</div>
</template>

<script setup lang="ts">
import type { IError } from '~/types/product';

defineProps<{
	error: IError
}>()

const handleClearError = () => clearError({ redirect: '/' })

</script>

<style scoped lang='scss'></style>