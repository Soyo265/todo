<template>
  <div>
    <v-text-field
          v-on="listeners"
          :value="value"
          :label="label"
          class="d.inline"
          type="text"
          color="teal"
    >
      <template v-slot:append>
        <slot></slot>
      </template>
    </v-text-field>
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
          input(value) {
            vm.$emit('input', value);
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
