<template>
  <div class="throttle-debounce">
    <FeButton @click="handlerDebounce">
      防抖debounce
    </FeButton>
  </div>
</template>

<script>
// 防抖节流
import { throttle, debounce } from './ThrottleDebounce/throttle-debounce';

export default {
  name: 'ThrottleDebounce',
  components: {

  },
  data() {
    return {
      throttle,
    };
  },
  created() {
    this.handlerDebounce = debounce(1000, () => {
      console.log('debounce');
    });
  },
};
</script>

<style lang="scss">
.throttle-debounce {

}
</style>
