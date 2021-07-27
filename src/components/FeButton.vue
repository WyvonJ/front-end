<template>
  <button class="fe-button" @click="handlerClick">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'FeButton',
  methods: {
    handlerClick() {
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss">
.fe-button {
  outline: none;
  border: 1px solid #42b983;
  padding: 6px 8px;
  background-color: transparent;
  margin-top: 4px;
  margin-right: 4px;
  color: #42b983;
  cursor: pointer;
  border-radius: 4px;
  transition: all 300ms ease;
  &:hover {
    background-color: #42b983;
    color: white;
  }
}
</style>
