<template>
	<div id="app">
		<button for-id="dropdown:navbar" @click="showDrowdown">show</button>
		<VueDropDown id="dropdown:navbar" :items="items" @onSelected="onSelected" :active="active" />
		
	</div>
</template>

<script>
import VueDropDown from "./components/VueDropDown";

export default {
	name: "App",
	data() {
		return {
			active: "apple",
			items: ["apple", "orange", "banana"]
		}
	},
	methods: {
		showDrowdown() {
			this.$vuedropdown.show("dropdown:navbar")
		},
		onSelected(name) {
			this.active = name;
		}
	},
	components: {
		VueDropDown
	}
}
</script>