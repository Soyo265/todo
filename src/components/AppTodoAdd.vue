<template>
  <div>
    <app-input
            v-model="todo"
            @keydown.enter="add"
            label="Добавить задачу: "
    >
      <v-btn
              @click="add"
              text
              icon
              color="teal"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </app-input>

  </div>
</template>

<script>
  import AppInput from "./AppInput";
  import { createNamespacedHelpers } from 'vuex';

  const { mapState, mapMutations } = createNamespacedHelpers('todo');

  export default {
    name: "AppTodoAdd",
    data() {
      return {
        todo: ''
      }
    },
    methods: {
      add() {
        this.addTodo(this.todo);
        this.todo = '';
        this.updateSearch('');
      },
      ...mapMutations(['addTodo', 'updateSearch'])
    },
    computed: {
      ...mapState(['todos'])
    },
    components: {
      AppInput
    }
  }
</script>

<style scoped>

</style>
