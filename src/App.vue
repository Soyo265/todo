<template>
  <v-app>
    <app-header></app-header>

    <app-main>
      <v-row class="d-flex align-end justify-center">
        <v-col lg="4" md="5" sm="12">
          <app-todo-add></app-todo-add>
        </v-col>
        <br>
        <v-col lg="4" md="5" sm="12">
          <app-todo-search></app-todo-search>
        </v-col>
      </v-row>
      <v-row class="d-flex align-end justify-center">
        <v-col lg="8" md="10" sm="12">
          <app-todo-list></app-todo-list>
        </v-col>
      </v-row>
    </app-main>

    <app-footer></app-footer>
  </v-app>
</template>

<script>
  import AppTodoAdd from "./components/AppTodoAdd";
  import AppTodoSearch from "./components/AppTodoSearch";
  import AppTodoList from "./components/AppTodoList";
  import AppHeader from "./components/AppHeader";
  import AppFooter from "./components/AppFooter";
  import AppMain from "./components/AppMain";
  import { createNamespacedHelpers } from 'vuex';

  const { mapState } = createNamespacedHelpers('todo');

  export default {
    name: 'App',
    computed: {
      ...mapState(['todos'])
    },
    components: {
      AppTodoAdd,
      AppTodoSearch,
      AppTodoList,
      AppHeader,
      AppFooter,
      AppMain
    }
  }
</script>
