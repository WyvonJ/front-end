<template>
  <div class="fe-tab-pane" v-show="rootTabs.current === name">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'FeTabPane',
  props: {
    label: String,
    name: String,
  },
  inject: ['rootTabs'],
};
</script>

<style lang="scss">
.fe-tab-pane {
}
</style>
