<template>
	<div id="app">
		<button for-id="dropdown:navbar" @click="showDrowdown">show</button>
		<VueDropDown id="dropdown:navbar" :items="dropdown.items" @onSelected="onSelected" :active="dropdown.active" :count="dropdown.count" />
	</div>
</template>

<script>
import VueDropDown from "./components/VueDropDown";

export default {
	name: "App",
	data() {
		return {
			dropdown: {
				active: "apple",
				items: ["apple", "orange", "banana"],
				count: 2
			}
		}
	},
	methods: {
		showDrowdown() {
			this.$vuedropdown.show("dropdown:navbar");
		},
		onSelected(name) {
			this.dropdown.active = name;
		}
	},
	components: {
		VueDropDown
	}
}
</script>