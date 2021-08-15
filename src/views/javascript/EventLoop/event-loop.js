// NodeJS中的事件循环

function eventloop1() {
  console.log('start');
  setTimeout(() => {
    console.log('timer1');
    Promise.resolve().then(() => {
      console.log('promise1');
    });
  }, 0);
  setTimeout(() => {
    console.log('timer2');
    Promise.resolve().then(() => {
      console.log('promise2');
    });
  }, 0);
  Promise.resolve().then(() => {
    console.log('promise3');
  });
  console.log('end');
}

// 浏览器版本 node11+结果: start end promise3 timer1 promise1 timer2 promise2
// timers阶段 会把setTimeout/setInterval依次执行
// node < 11版本结果: start end promise3 timer1 timer2 promise1  promise2
eventloop1();

function eventloop2() {
  setTimeout(() => {
    console.log('timeout');
  }, 0);
  setImmediate(() => {
    console.log('immediate');
  });
}

eventloop2();

function eventloop3() {
  setTimeout(() => {
    console.log('timer1');
    process.nextTick(() => {
      console.log('nextTick1');
    });
    Promise.resolve().then(() => {
      console.log('promise1');
      process.nextTick(() => {
        console.log('nextTick2');
      });
    });
  }, 0);
  Promise.resolve().then(() => {
    console.log('promise2');
    process.nextTick(() => {
      console.log('nextTick3');
    });
    setTimeout(() => {
      console.log('timer2');
      process.nextTick(() => {
        console.log('nextTick4');
      });
    }, 0);
  });
  process.nextTick(() => {
    console.log('nextTick5');
  });
}
// process.nextTick是独立于 Event Loop 之外的，它有一个自己的队列
// 当每个阶段完成后，如果存在 nextTick 队列，就会清空队列中的所有回调函数，并且优先于其他 microtask 执行。
// nextTick5 promise2 nextTick3 timer1 nextTick1 promise1 nextTick2 timer2 nextTick4

eventloop3();
