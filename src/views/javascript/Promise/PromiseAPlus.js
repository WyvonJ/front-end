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
   * @param {Function} func
   * @memberof PromiseAPlus
   */
  constructor(func) {
    // 确保使用函数初始化
    if (typeof func !== 'function') {
      throw new TypeError(`Promise resolver ${func} is not a function`);
    }
    // promise的值
    this.value = null;
    // promise被拒绝的原因
    this.reason = null;
    this.status = 'pending';
    this.onFulfilled = [];
    this.onRejected = [];

    /**
     *
     * @param {any} val
     */
    const resolve = (val) => {
      if (this.status === 'pending') {
        this.status = 'fulfilled';
        this.value = val;
        this.onFulfilled.forEach((f) => f(val));
      }
    };

    /**
     *
     * @param {any} err
     */
    const reject = (err) => {
      if (this.status === 'pending') {
        this.status = 'rejected';
        this.reason = err;
        this.onRejected.forEach((f) => f(err));
      }
    };

    try {
      func(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  static resolve() {}

  static reject() {}

  static all() {}

  static race() {}

  /**
   * then方法
   * @param {Function} onFulfilled
   * @param {Function} onRejected
   * @return {PromiseAPlus}
   * @memberof PromiseAPlus
   */
  then(onFulfilled, onRejected) {
    let promise2;
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (x) => x;
    onRejected = typeof onRejected === 'function'
      ? onRejected
      : (e) => {
        throw e;
      };
    switch (this.status) {
      case 'pending':
        promise2 = new PromiseAPlus((resolve, reject) => {
          this.onFulfilled.push(() => {
            setTimeout(() => {
              try {
                const x = onFulfilled(this.value);
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
 * @param {PromiseAPlus} promise
 * @param {any} x
 * @param {Function} resolve
 * @param {Function} reject
 */
function ResolutionProcedure(promise, x, resolve, reject) {
  if (promise === x) {
    return reject(new TypeError('Same Promise'));
  }

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

  if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    try {
      const { then } = x;
      if (typeof then === 'function') {
        // 状态只能更改一次
        let isuse = false;
        try {
          then.call(
            x,
            (y) => {
              if (!isuse) {
                ResolutionProcedure(promise, y, resolve, reject);
                isuse = true;
              }
            },
            (r) => {
              reject(r);
              isuse = true;
            },
          );
        } catch (error) {
          if (!isuse) {
            reject(error);
          }
        }
      } else {
        resolve(x);
      }
    } catch (error) {
      reject(error);
    }
  } else {
    resolve(x);
  }
}
