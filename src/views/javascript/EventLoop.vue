<template>
  <div class="event-loop">
    <FeButton @click="eventLoop1"> 事件循环1 </FeButton>
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
  },
};
</script>

<style lang="scss">
.event-loop {
}
</style>
