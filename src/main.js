import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.mixin({
	computed: {
		$vuedropdown() {
			const $this = this;

			return {
				show(name) {
					$this.$root.$emit("vuedropdown:show", name);
				}
			}
		}
	}
})

new Vue({
  render: h => h(App),
}).$mount('#app')
