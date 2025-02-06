
<template>
	<my-button typeButton="primary">first button</my-button>
	<my-button typeButton="secondary">second button</my-button>
	<my-button typeButton="muted">third button</my-button>
	<my-button :processing="true">forth button</my-button>
</template>

<script>
import MyButton from "./components/MyButton.vue";

export default {
	components: {
		'my-button': MyButton
	}
}
</script>




<style scoped>
.blue {
	background-color: #007acc;
}

.purpure {
	background-color: #c822af;
}

.gray {
	background-color: #aab0b6;
}

button:disabled {
	opacity: 0.3;
}
</style>
