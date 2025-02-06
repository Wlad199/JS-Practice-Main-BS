<template>
	<child-component>
		<template v-slot:text>This is text</template>
		<template #button>this is button</template>
		<template v-slot:default>default text</template>
	</child-component>
	<child-component>
		<template v-slot:default>This is text</template>
	</child-component>
</template>

<script>
import ChildComponent from './components/ChildComponent.vue'
export default {
	components: {
		ChildComponent
	}
}
</script>

<style></style>