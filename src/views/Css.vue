<template>
  <div class="css">
    <FeTabs>
      <FeTabPane name="TwoColumn" label="两栏布局">
        <TwoColumn/>
      </FeTabPane>
      <FeTabPane name="ThreeColumn" label="三栏布局">
        <ThreeColumn/>
      </FeTabPane>
    </FeTabs>
  </div>
</template>

<script>
import TwoColumn from '@/components/css/TwoColumn.vue';
import ThreeColumn from '@/components/css/ThreeColumn.vue';

export default {
  name: 'Css',
  components: {
    TwoColumn,
    ThreeColumn,
  },
};
</script>

<style lang="scss">
.css {
}
</style>
