<template>
  <div>
    <v-list v-if="filteredTodos.length !== 0" outlined class="pa-0">
      <v-list-item-group color="red">
        <v-list-item
                v-for="(todo, idx) in filteredTodos"
                :key="idx"
                color="teal"
        >
          <v-btn @click="removeTodo(todo)" small plain><v-icon>mdi-delete</v-icon></v-btn>
          <span>{{todo}}</span>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <p v-else-if="search">Ничего не найдено.</p>
    <p
            v-else
            class="body-1"
    >Список пуст.</p>
  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';

  const { mapMutations, mapGetters, mapState } = createNamespacedHelpers('todo');

  export default {
    name: "AppTodoList",
    methods:{
      ...mapMutations(['removeTodo'])
    },
    computed: {
      ...mapGetters(['filteredTodos']),
      ...mapState(['search'])
    }
  }
</script>

<style scoped>

</style>
