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

Vue.directive('click-outside', {
  bind(el, binding, vnode) {
    el.clickOutsideEvent = event => {
      if (!(el == event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent);
  },
	unbind(el) {
		document.body.removeEventListener('click', el.clickOutsideEvent);
	},
});

new Vue({
  render: h => h(App),
}).$mount('#app')
