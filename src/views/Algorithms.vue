<template>
  <div class="algorithms">
    <FeTabs @change="handlerChange">
      <FeTabPane
        :name="tab.name"
        :label="tab.label"
        v-for="tab of tabs"
        :key="tab.name"
      >
      </FeTabPane>
    </FeTabs>
    <router-view />
  </div>
</template>

<script>
import AlgorithmsTabs from '@/router/algorithms';

export default {
  name: 'Algorithms',
  data() {
    return {
      tabs: AlgorithmsTabs.map(({ path, name }) => ({
        name: path,
        label: name,
      })),
    };
  },
  created() {
    if (this.$route.name === 'Algorithms') {
      const [{ name }] = this.tabs;
      this.$router.push(`/algorithms/${name}`);
    }
  },
  methods: {
    handlerChange(path) {
      if (!this.$route.path.includes(path)) {
        this.$router.push(`/algorithms/${path}`);
      }
    },
  },
};
</script>

<style lang="scss">
.algorithms {
}
</style>
