<template>
  <div id="app">
    <app-todo-add
            @addTodo="addTodo"
    ></app-todo-add>
    <br>
    <app-todo-search
            @changeSearchInput="search = $event"
            :input="search"
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
      this.todos = [...this.todos.filter((val, currentIdx) => idx !== currentIdx)];
    },
    addTodo(todo){
      this.todos.push(todo);
      this.search = '';
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
