<template>
  <div>
    <base-input
        v-model="input"
        label="Поиск по задачам: "
        id="search"
    ></base-input>
  </div>
</template>

<script>
  import BaseInput from "./BaseInput";

  export default {
    name: "AppTodoSearch",
    props: {
      input: String
    },
    watch: {
      input() {
        this.$emit('changeSearchInput', this.input);
      }
    },
    components: {
      BaseInput
    }
  }
</script>

<style scoped>

</style>
