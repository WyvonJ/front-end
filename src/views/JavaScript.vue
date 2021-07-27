<template>
  <div class="javascript">
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
import JavaScriptTabs from '@/router/javascript';

export default {
  name: 'JavaScript',
  data() {
    return {
      tabs: JavaScriptTabs.map(({ path, name }) => ({
        name: path,
        label: name,
      })),
    };
  },
  methods: {
    handlerChange(path) {
      if (!this.$route.path.includes(path)) {
        this.$router.push(`/javascript/${path}`);
      }
    },
  },
};
</script>

<style lang="scss">
.javascript {
}
</style>
