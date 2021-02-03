# vue-drop-down

## Install

```bash
npm install vue-drop-down
```

```vue
<template>
  <div>
    <VueDropDown id="dropdown:navbar-01" :items="dropdown.items" @onSelected="onSelected" :active="dropdown.active" :count="dropdown.count" />
  </div>
</template>

<script>
  import Multiselect from "vue-drop-down";

  export default {
    data () {
      return {
        options: ['list', 'of', 'options']
      }
    },
    components: {
      Multiselect
    },
  }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
```