<template>
  <div class="event-loop">
    <FeButton @click="eventLoop1">
      事件循环1
    </FeButton>
    <FeButton @click="eventLoop2">
      事件循环2
    </FeButton>
    <FeButton @click="eventLoop3">
      事件循环3
    </FeButton>
    <FeButton @click="eventLoop4">
      事件循环4
    </FeButton>
    <FeButton @click="eventLoop5">
      事件循环5
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
    eventLoop3() {
      Promise.resolve().then(() => {
        // 微任务1
        console.log('Promise1');
        // 宏任务2
        setTimeout(() => {
          console.log('setTimeout2');
        }, 0);
      });
      // 宏任务1
      setTimeout(() => {
        console.log('setTimeout1');
        // 微任务2
        Promise.resolve().then(() => {
          console.log('Promise2');
        });
      }, 0);
      // Promise1 setTimeout1 Promise2 setTimeout2

      // 整个函数中执行完同步部分即Promise.resolve().then和setTimeout之后, 浏览器会去检查微任务队列
      // 此时被添加到微任务队列中的只有一个 微任务1 ↑
      // 所以执行该微任务, 打印Promise1, 然后查看宏任务队列
      // 此时宏任务队列中有宏任务1和刚刚在微任务中加入的宏任务2
      // 此时从宏任务队列取出一个任务, 打印setTimeout1, 并将微任务2加入微任务队列
      // 执行微任务2, 打印 Promise2
      // 清空完微任务队列后, 从宏任务再取一个, 打印setTimeout2
    },
    eventLoop4() {
      async function async1() {
        console.log(1);
        await async2();
        console.log(2);
        await 3;
        console.log(3);
        await 4;
        console.log(4);
      }

      async function async2() {
        console.log(5);
      }

      async1();

      new Promise((resolve) => {
        console.log(6);
        resolve();
        console.log(7);
      }).then(() => {
        console.log(8);
      }).then(() => {
        console.log(9);
      }).then(() => {
        console.log(10);
      });
    },
    eventLoop5() {
      new Promise((resolve) => {
        console.log(1);
        resolve();
      }).then(() => {
        console.log(2);
      }).then(() => {
        console.log(3);
      }).then(() => {
        console.log(4);
      });

      new Promise((resolve) => {
        console.log(5);
        resolve();
      }).then(() => {
        console.log(6);
      }).then(() => {
        console.log(7);
      }).then(() => {
        console.log(8);
      });
    },
  },
};
</script>

<style lang="scss">
.event-loop {
}
</style>
