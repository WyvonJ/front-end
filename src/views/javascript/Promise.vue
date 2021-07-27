<template>
  <div class="promise">
    <FeButton @click="promisePractise1"> Promise练习1 </FeButton>
    <FeButton @click="promisePractise2"> Promise练习2 </FeButton>
    <FeButton @click="promisePractise3"> Promise练习3 </FeButton>
    <FeButton @click="promisePractise4"> Promise练习4 </FeButton>
    <FeButton @click="promisePractise5"> Promise练习5 </FeButton>
    <FeButton @click="promisePractise6"> Promise练习6 </FeButton>
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
    promisePractise1() {
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
    promisePractise2() {
      // 输出顺序 1 2 5 (wait 3s) 3 4
      console.log(1);
      new PromiseAPlus((resolve) => {
        console.log(2);
        setTimeout(() => {
          console.log(3);
          resolve(4);
        }, 3000);
      }).then((res) => {
        console.log(res);
      });
      console.log(5);
    },
    // 循环调用
    promisePractise3() {
      const p1 = new PromiseAPlus((resolve) => {
        resolve(1);
      }, (err) => {
        console.log(err);
      });
      const p2 = p1.then(() => p2);
      console.log(p2);
    },
    promisePractise4() {
      new PromiseAPlus((resolve) => {
        setTimeout(() => {
          resolve(100);
        }, 4000);
      }).then((res) => {
        console.log(res);
        const obj = { a: 1 };
        return obj;
      })
        .then((res) => {
          console.log('re', res);
        });
    },
    // 测试静态方法resolve和reject
    promisePractise5() {
      const p1 = PromiseAPlus.resolve(1);
      console.log(p1);
      const p2 = PromiseAPlus.reject(1);
      console.log(p2);
      const p3 = new PromiseAPlus((resolve) => {
        setTimeout(() => {
          resolve(3);
        }, 3000);
      });
      const p4 = PromiseAPlus.resolve(p3);
      console.log(p3, p4, p3 === p4);
      p4.then((value) => {
        console.log('p4 value', value);
      });
    },
    promisePractise6() {
      console.log(1);
      setTimeout(() => {
        console.log(2);
      }, 0);
      PromiseAPlus.resolve(3)
        .then((v) => {
          console.log(v);
        });
      console.log(4);
    },
  },
};
</script>

<style lang="scss">
.promise {
}
</style>
