<template>
  <div>
    <ul v-if="filteredTodos.length !== 0">
      <li
          v-for="(todo, idx) in filteredTodos"
          :key="idx"
      >
        <button @click="$emit('delete', idx)">x</button>
        <span>{{todo}}</span>
      </li>
    </ul>
    <p v-else-if="search">Ничего не найдено.</p>
    <p v-else>Список пуст.</p>
  </div>
</template>

<script>
  export default {
    name: "AppTodoList",
    props: {
      todos: Array,
      search: String
    },
    computed: {
      filteredTodos() {
        return this.todos.filter(todo => todo.includes(this.search));
      }
    }
  }
</script>

<style scoped>

</style>
