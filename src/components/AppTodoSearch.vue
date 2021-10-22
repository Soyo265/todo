<template>
  <div>
    <app-input
        :value="search"
        @input="updateSearch($event)"
        label="Поиск по задачам: "
    ></app-input>
  </div>
</template>

<script>
  import AppInput from "./AppInput";
  import { createNamespacedHelpers } from 'vuex';

  const { mapMutations, mapState } = createNamespacedHelpers('todo');

  export default {
    name: "AppTodoSearch",
    methods:{
      ...mapMutations(['updateSearch'])
    },
    computed: {
      ...mapState(['search'])
    },
    components: {
      AppInput
    }
  }
</script>

<style scoped>

</style>
