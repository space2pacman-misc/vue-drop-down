<template>
	<div id="app">
		<hr>
		<button for-id="dropdown:navbar" @click="showDrowdown">show</button>
		<VueDropDown style="width: 300px" id="dropdown:navbar" :items="dropdown.items" @onSelected="onSelected" :active="dropdown.active" :count="dropdown.count" />
		<hr>
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
				items: ["apple", "orange", "banana", "looooooooooooooooooooooooooooong banane", "melon"],
				count: 0
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