<template>
  <div class="throttle-debounce">

  </div>
</template>

<script>
// 防抖节流
import { throttle, debounce } from './ThrottleDebounce/throttle-debounce';

console.log(throttle, debounce);

export default {
  name: 'ThrottleDebounce',
  components: {

  },
  data() {
    // console.log(throttle);
    // console.log(debounce);
    return {

    };
  },
};
</script>

<style lang="scss">
.throttle-debounce {

}
</style>
