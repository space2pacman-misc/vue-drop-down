<template>
	<div id="app">
		<button for-id="dropdown:navbar-01" @click="showDrowdown('dropdown:navbar-01')">show</button>
		<VueDropDown style="width: 300px" id="dropdown:navbar-01" :items="dropdown.items" @onSelected="onSelected" :active="dropdown.active" :count="dropdown.count" />
		<hr>
		<button for-id="dropdown:navbar-02" @click="showDrowdown('dropdown:navbar-02')">show</button>
		<VueDropDown style="width: 300px" id="dropdown:navbar-02" :items='["123", "321", "33", "looooooooooooooooooooooooooooong banane", "melon"]' @onSelected="onSelected" :active="dropdown.active">
			<template v-slot:bottom>
				<div class="dropdown__reset">Сбросить выбор</div>
			</template>
		</VueDropDown>
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
				count: 4
			}
		}
	},
	methods: {
		showDrowdown(id) {
			this.$vuedropdown.show(id);
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