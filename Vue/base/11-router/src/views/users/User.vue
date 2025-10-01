<template>
	<h1>User`s page</h1>
	<p>This is ID of user {{ route.params.id }}</p>
</template>

<script setup>
import { useRoute } from 'vue-router';


const route = useRoute()


</script>

<style scoped></style>