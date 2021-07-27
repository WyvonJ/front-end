<template>
  <div class="promise">
    <FeButton @click="promisePractise"> Promise练习 </FeButton>
  </div>
</template>

<script>
import PromiseAPlus from './Promise/PromiseAPlus';
// Promise
export default {
  name: 'Promise',
  data() {
    return {
      flag: false,
    };
  },
  methods: {
    promisePractise() {
      const p = new PromiseAPlus((resolve, reject) => {
        this.flag = !this.flag;
        if (this.flag === false) {
          resolve(1);
        } else {
          reject(2);
        }
      }).then((res) => {
        console.log('res', res);
      }, (reason) => {
        console.log('reason', reason);
      });
      console.log(p);
    },
  },
};
</script>

<style lang="scss">
.promise {
}
</style>
