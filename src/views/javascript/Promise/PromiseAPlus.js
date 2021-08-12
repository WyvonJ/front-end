// Promise A+规范
// 一个Promise指的是一个异步操作最后的结果, 最原始的与Promise交互的方法就是通过其then方法
// Promise状态
// 只能为pending, fulfilled, rejected中的某一种状态
// 1. 当为pending时, 可变为fulfilled或rejected;
// 2. 当为fulfilled时, promise无法再改变状态, 必须有值, 且无法被修改;
// 3. 当为rejected时, promise无法再改变状态, 必须有被拒绝的原因, 且无法被修改;
// then方法
// 一个Promise必须有一个then方法来获取到它最终的结果或者被拒绝的原因
// then方法接受两个参数, onFulfilled和onRejected, 如果它们不为函数, 则会被忽略掉
// 如果onFulfilled为函数:
// 则其必须再promise完成之后被调用, 且promise的值作为第一个参数传入, 它不能在promise完成后调用, 并且只能被调用一次
// 如果onRejected为函数:
// 则其必须再promise被拒绝之后被调用, 且promise被拒绝的原因作为第一个参数传入, 它不能在promise完成后调用, 并且只能被调用一次
// onFulfilled和onRejected必须在执行上下文调用栈仅包含平台代码时才能调用
// onFulfilled和onRejected必须作为函数调用, 且不包含this值
// then方法可能被同一个promise多次调用
// then方法必须返回一个promise

/**
 * 手写Promise A+规范
 * @export
 * @class PromiseAPlus
 */
export default class PromiseAPlus {
  /**
   * Creates an instance of PromiseAPlus.
   * @param {Function} executor
   * @memberof PromiseAPlus
   */
  constructor(executor) {
    // 确保使用函数初始化
    if (typeof executor !== 'function') {
      throw new TypeError(`Promise resolver ${executor} is not a function`);
    }
    // promise的值
    this.value = null;
    // promise被拒绝的原因
    this.reason = null;
    this.status = 'pending';
    this.onFulfilled = [];
    this.onRejected = [];

    /**
     * 作为参数的resolve方法
     * @param {any} val resolve的值
     */
    const resolve = (val) => {
      if (this.status === 'pending') {
        // 进行状态的改变
        this.status = 'fulfilled';
        this.value = val;
        // 成功回调的执行
        // 当promise被resolve的时候, 依次调用所有的then中的onFulfilled方法, 并将值传入
        this.onFulfilled.forEach((f) => f(val));
      }
    };

    /**
     * 作为参数的reject方法
     * @param {any} err reject的拒因
     */
    const reject = (err) => {
      if (this.status === 'pending') {
        this.status = 'rejected';
        this.reason = err;
        this.onRejected.forEach((f) => f(err));
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  static resolve() {
    // return new PromiseAPlus((resolve) => resolve(value));
  }

  static reject() {
    // return new PromiseAPlus((resolve, reject) => reject(reason));
  }

  // TODO 实现
  static all() {}

  static race() {}

  static any() {}

  static allSettled() {}

  /**
   * then方法
   * @param {Function} onFulfilled
   * @param {Function} onRejected
   * @return {PromiseAPlus}
   * @memberof PromiseAPlus
   */
  then(onFulfilled, onRejected) {
    let promise2;
    // 如果onFulfilled或onRejected不是函数的话
    // onFulfilled则定义为将x原样返回
    // onRejected定义为抛出拒因的方法
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (x) => x;
    onRejected = typeof onRejected === 'function'
      ? onRejected
      : (e) => {
        throw e;
      };
    switch (this.status) {
      case 'pending':
        promise2 = new PromiseAPlus((resolve, reject) => {
          // 如果还在pending状态, 则将对应的方法分别加到方法处理数组中
          this.onFulfilled.push(() => {
            // 定义异步调用方法
            setTimeout(() => {
              try {
                const x = onFulfilled(this.value);
                // 处理then方法的返回值
                ResolutionProcedure(promise2, x, resolve, reject);
              } catch (error) {
                reject(error);
              }
            }, 0);
          });
          this.onRejected.push(() => {
            setTimeout(() => {
              try {
                const x = onRejected(this.reason);
                ResolutionProcedure(promise2, x, resolve, reject);
              } catch (error) {
                reject(error);
              }
            }, 0);
          });
        });
        break;
      case 'fulfilled':
        promise2 = new PromiseAPlus((resolve, reject) => {
          setTimeout(() => {
            try {
              const x = onFulfilled(this.value);
              ResolutionProcedure(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          });
        });
        break;
      case 'rejected':
        promise2 = new PromiseAPlus((resolve, reject) => {
          setTimeout(() => {
            try {
              const x = onRejected(this.reason);
              ResolutionProcedure(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          });
        });
        break;
      default:
        break;
    }
    return promise2;
  }

  /**
   * 语法糖
   * @param {Function} onRejected
   * @return {PromiseAPlus}
   * @memberof PromiseAPlus
   */
  catch(onRejected) {
    return this.then(null, onRejected);
  }

  // finally() {}
}

/**
 * 决议过程
 * 将一个promise和一个值x输入, 将这个过程表示为[[Resolve]](promise, x)
 * 如果x是一个thenable, 那么它会试图使promise采用x的状态, 前提是x的行为至少有一点像promise
 * 否则, 它将用x的值执行promise
 * @param {PromiseAPlus} promise
 * @param {any} x 上一个then方法的返回值
 * @param {Function} resolve
 * @param {Function} reject
 */
function ResolutionProcedure(promise, x, resolve, reject) {
  // 如果promise和x是同一个对象, 则抛出TypeError
  if (promise === x) {
    return reject(new TypeError('Same Promise'));
  }
  // 如果x是一个promise, 使用它的状态
  if (x instanceof PromiseAPlus) {
    x.then(
      (xvalue) => {
        ResolutionProcedure(promise, xvalue, resolve, reject);
      },
      (xreason) => {
        reject(xreason);
      },
    );
  }
  // x为对象或者函数, 那么需要检测x是不是一个promise
  if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    try {
      const { then } = x;
      // 如果有then方法, 那么就来改当前这个promise的值
      if (typeof then === 'function') {
        // 状态只能更改一次
        let isUsed = false;
        try {
          // 执行这个then方法, 将它的状态转移给新的promise
          then.call(
            x,
            (y) => {
              if (!isUsed) {
                ResolutionProcedure(promise, y, resolve, reject);
                isUsed = true;
              }
            },
            (r) => {
              reject(r);
              isUsed = true;
            },
          );
        } catch (error) {
          if (!isUsed) {
            reject(error);
          }
        }
      } else {
        // 没有then方法, 直接resolve
        resolve(x);
      }
    } catch (error) {
      reject(error);
    }
  } else {
    // 如果x不是一个对象或函数, 也不是promise则直接resolve掉x
    resolve(x);
  }
}
