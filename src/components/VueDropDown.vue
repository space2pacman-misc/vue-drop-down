<template>
	<div class="dropdown">
		<div class="dropdown__list" v-show="isOpen">
			<div class="dropdown__items" :style="`height: ${this.getListHeight}px`">
				<div 
					v-for="(item, index) in items"
					:key="index"
					:class="{ 'dropdown__item--active': item === active }"
					class="dropdown__item"
					ref="dropdown__item"
					@click="onSelect(item)"
				>
					{{ item }}
				</div>
			</div>
			<div class="dropdown__reset">Сбросить выбор</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isOpen: false,
			height: 0,
			options: {
				height: 200
			}
		}
	},
	methods: {
		onSelect(value) {
			this.$emit("onSelected", value);
			this.isOpen = false;
		},
		onDropdownShow(name) {
			if(this.id === name) {
				this.isOpen = !this.isOpen;
			}
		},
		onDocumentClick(event) {
			if(event.target.getAttribute("for-id") !== this.id) {
				this.isOpen = false;
			}
		},
		showItems() {
			this.isOpen = true;

			this.$nextTick(() => {
				for(let i = 0; i < this.count; i++) {
					if(this.$refs["dropdown__item"][i]) {
						let item = this.$refs["dropdown__item"][i];

						this.height += item.offsetHeight;
					}
				}

				this.isOpen = false;
			})
		}
	},
	computed: {
		getListHeight() {
			return this.count > 0 ? this.height : false;
		}
	},
	mounted() {
		this.$root.$on("vuedropdown:show", this.onDropdownShow);
		document.body.addEventListener("click", this.onDocumentClick);

		if(this.count > 0) {
			this.showItems();
		}
	},
	props: {
		id: String,
		active: String,
		items: Array,
		count: {
			type: Number,
			default: 0
		}
	}
}
</script>

<style scoped>
.dropdown {
	position: relative;
    margin-left: 22px;
}
.dropdown__list {
	position: absolute;
	background: #fff;
	margin-top: 6px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	width: 100%;
	z-index: 2;
	border-radius: 5px;
	overflow: hidden;
}
.dropdown__items {
	overflow: auto;
}
.dropdown__item {
	padding: 10px 0px 10px 18px;
	font-size: 15px;
	cursor: pointer;
}
.dropdown__item--active {
	background: #BA9D5A;
}
.dropdown__item:hover {
	background: #BA9D5A;
}
.dropdown__reset {
	text-align: center;
	background: #233345;
	font-size: 14px;
	color: #C1D2E9;
	padding: 10px 0px 10px 0px;
	cursor: pointer;
}
.dropdown__reset:hover {
	background: #233345;
}
@media (max-width: 1280px){
	.dropdown {
		margin-left: 0;
		width: 50%;
		margin-right: 18px;
	}
	.dropdown:last-child {
		margin-right: 0px;
	}
	.dropdown__button {
		width: 100%;
	}
}
</style>