<template>
  <div>
    <label
      :for="id"
    >{{label}}</label>
    <input
      :id="id"
      v-on="listeners"
      :value="value"
      v-bind="$attrs"
      type="text">
  </div>
</template>

<script>
  export default {
    name: "BaseInput",
    props: {
      label: String,
      id: String,
      value: String
    },
    computed: {
      listeners() {
        const vm = this;
        return Object.assign({}, this.$listeners, {
          input(event) {
            vm.$emit('input', event.target.value);
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
