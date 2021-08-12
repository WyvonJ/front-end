<template>
  <div class="asynchronous">
    <p>第一阶段 回调函数</p>
    <FeButton @click="handlerStep1">
      callback
    </FeButton>
    <p>第二阶段 Promise</p>
    <FeButton @click="handlerStep2">
      Promise
    </FeButton>
    <p>第三阶段 生成器</p>
    <FeButton @click="handlerStep3">
      Generator
    </FeButton>
    <p>第四阶段 async/await</p>
    <FeButton @click="handlerStep4">
      async/await
    </FeButton>
    <p>面试题</p>
    <FeButton @click="handlerInterview1">
      面试题1
    </FeButton>
    <FeButton @click="handlerInterview2">
      面试题2
    </FeButton>
  </div>
</template>

<script>
// 异步

export default {
  name: 'Asynchronous',
  data() {
    return {
    };
  },
  methods: {
    /* JS异步发展过程总结 */
    // 回调函数阶段
    handlerStep1() {
      // 缺点 回调地狱, 不能return
      setTimeout(() => {
        console.log(1);
        setTimeout(() => {
          console.log(2);
        }, 200);
        setTimeout(() => {
          console.log(3);
        }, 300);
      }, 100);
    },
    // Promise
    handlerStep2() {
      // 解决回调地狱, 链式调用
      // 一旦新建就会立即执行, 无法取消
    },
    // 生成器
    handlerStep3() {
    },
    // async/await
    handlerStep4() {
    },
    handlerInterview1() {
      let a = 0;
      const b = async () => {
        a += await 10;
        // b先运行, 此时a = 0, 堆栈中保存了a = 0的结果, 继续运行时为 a = 0 + 10
        console.log(a); // 10
      };
      b();
      a++;
      console.log(a); // 1
    },
    handlerInterview2() {
      let a = 0;
      const b = async () => {
        const c = await 10;
        a += c;
        console.log(a); // 11
      };
      b();
      a++;
      console.log(a); // 1
    },
  },
};
</script>

<style lang="scss">
.asynchronous {
}
</style>
