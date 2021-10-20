<template>
  <div id="app">
    <app-todo-add
            @addTodo="todos.push($event)"
    ></app-todo-add>
    <br>
    <app-todo-search
            @changeSearchInput="search = $event"
    ></app-todo-search>
    <app-todo-list
            :todos="todos"
            :search="search"
            @delete="deleteTodo"
    ></app-todo-list>
  </div>
</template>

<script>
import AppTodoAdd from "./components/AppTodoAdd";
import AppTodoSearch from "./components/AppTodoSearch";
import AppTodoList from "./components/AppTodoList";

export default {
  name: 'App',
  data() {
    return {
      todos: [],
      search: ''
    }
  },
  methods: {
    deleteTodo(idx) {
      this.todos.splice(idx, 1);
    }
  },
  components: {
    AppTodoAdd,
    AppTodoSearch,
    AppTodoList
  }
}
</script>

<style></style>
