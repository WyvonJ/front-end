<template>
  <div class="vue">
    <FeTabs @change="handlerChange">
      <FeTabPane
        :name="tab.name"
        :label="tab.label"
        v-for="tab of tabs"
        :key="tab.name"
      >
      </FeTabPane>
    </FeTabs>
    <router-view/>
  </div>
</template>

<script>
import VueTabs from '@/router/vue';

export default {
  name: 'Vue',
  data() {
    return {
      tabs: VueTabs.map(({ path, name }) => ({
        name: path,
        label: name,
      })),
    };
  },
  methods: {
    handlerChange(path) {
      if (!this.$route.path.includes(path)) {
        this.$router.push(`/vue/${path}`);
      }
    },
  },
};
</script>

<style lang="scss">
.vue {
}
</style>
