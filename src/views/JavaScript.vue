<template>
  <div class="javascript">
    <FeTabs>
      <FeTabPane name="EventLoop" label="事件循环">
        <EventLoop />
      </FeTabPane>
      <FeTabPane name="CrossOrigin" label="跨域">
        <CrossOrigin />
      </FeTabPane>
    </FeTabs>
  </div>
</template>

<script>
import EventLoop from '@/components/javascript/EventLoop.vue';
import CrossOrigin from '@/components/javascript/CrossOrigin.vue';

export default {
  name: 'JavaScript',
  components: {
    EventLoop,
    CrossOrigin,
  },
};
</script>

<style lang="scss">
.javascript {
}
</style>
