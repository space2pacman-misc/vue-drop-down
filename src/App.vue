<template>
	<div id="app">
		<button @click="showDrowdown">show</button>
		<VueDropDown id="dropdown:navbar" :items="items" />
	</div>
</template>

<script>
import VueDropDown from "./components/VueDropDown";

export default {
	name: "App",
	data() {
		return {
			items: ["apple", "orange", "banana"]
		}
	},
	methods: {
		showDrowdown() {
			this.$vuedropdown.show("dropdown:navbar")
		}
	},
	components: {
		VueDropDown
	}
}
</script>