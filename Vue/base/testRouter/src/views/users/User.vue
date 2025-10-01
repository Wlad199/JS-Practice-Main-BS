<template>
	<h1>User id: {{ route.params.id }}</h1>
	<h2>{{ route.query.name }}</h2>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()


</script>

<style scoped></style>