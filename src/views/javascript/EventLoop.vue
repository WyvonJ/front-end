<template>
  <div class="event-loop">
    <FeButton @click="eventLoop1">
      事件循环1
    </FeButton>
    <FeButton @click="eventLoop2">
      事件循环2
    </FeButton>
  </div>
</template>

<script>
// 事件循环
// 宏任务macrotask: setTimeout, setInterval, setImmediate
// 微任务microtask: process.nextTick, Promise callback, queueMicrotask
// 微任务在宏任务之前执行
// 任务队列中顺序为 主线程代码执行 -> 执行完之后将微任务队列清空 -> 检查宏任务, 执行所有宏任务
export default {
  name: 'EventLoop',
  data() {
    return {
    };
  },
  methods: {
    eventLoop1() {
      // 主线程代码
      console.log(1);
      // 宏任务
      setTimeout(() => {
        console.log(2);
      }, 0);
      // 微任务 then中的回调方法被添加到微任务当中
      Promise.resolve(3)
        .then((v) => {
          console.log(v);
        });
      // 主线程代码
      console.log(4);
      // 输出 1 4 3 2
    },
    eventLoop2() {
      async function async1() {
        console.log('async1 start');
        // FIXME 注意这个async2是不是先执行完再继续
        await async2();
        console.log('async1 end');
      }
      async function async2() {
        console.log('async2');
      }
      console.log('script start');
      setTimeout(() => {
        console.log('setTimeout');
      }, 0);
      async1();
      new Promise(((resolve) => {
        console.log('promise1');
        resolve();
      })).then(() => {
        console.log('promise2');
      });
      console.log('script end');

      // script start
      // async1 start
      // async2
      // promise1
      // script end
      // async1 end
      // promise2
      // setTimeout
    },
  },
};
</script>

<style lang="scss">
.event-loop {
}
</style>
