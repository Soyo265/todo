export default {
  namespaced: true,
  state: {
    todos: ['Первая запись в store', 'Вторая запись в store', 'Третья запись в store'],
    search: ''
  },
  getters: {
    filteredTodos(state) {
      if (!state.search) return state.todos;
      return state.todos.filter(todo => todo.toLowerCase().includes(state.search.toLowerCase()));
    }
  },
  mutations: {
    addTodo(state, todo) {
      return state.todos.push(todo);
    },
    removeTodo(state, toRemove) {
      state.todos = state.todos.filter(todo => todo !== toRemove);
    },
    updateSearch(state, newSearch) {
      state.search = newSearch;
    }
  }
}
