<template>
  <div class="css">
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
import CssTabs from '@/router/css';

export default {
  name: 'Css',
  data() {
    return {
      tabs: CssTabs.map(({ path, name }) => ({
        name: path,
        label: name,
      })),
    };
  },
  methods: {
    handlerChange(path) {
      if (!this.$route.path.includes(path)) {
        this.$router.push(`/css/${path}`);
      }
    },
  },
};
</script>

<style lang="scss">
.css {
}
</style>
