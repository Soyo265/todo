<template>
  <div>
    <base-input
            v-model="todo"
            @keydown.enter="add"
            label="Добавить задачу: " id="add"
    ></base-input>
    <button @click="add">Добавить</button>
  </div>
</template>

<script>
  import BaseInput from "./BaseInput";

  export default {
    name: "AppTodoAdd",
    data() {
      return {
        todo: ''
      }
    },
    methods: {
      add() {
        this.$emit('addTodo', this.todo);
        this.todo = '';
      }
    },
    components: {
      BaseInput
    }
  }
</script>

<style scoped>

</style>
