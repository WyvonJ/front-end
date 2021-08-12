function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
}

function isFunction(fn) {
  return typeof fn === 'function';
}

/**
 * 数组原型方法+常用方法实现
 * @export
 * @class ArrayMethods
 */
export default class ArrayMethods {
  /**
   * forEach循环
   * @static
   * @param {Array<any>} arr 数组
   * @param {Function} fn 对每一项执行的方法
   * @memberof ArrayMethods
   */
  static forEach(arr, fn) {
    if (isArray(arr) && isFunction(fn)) {
      const { length } = arr;
      for (let i = 0; i < length; i++) {
        fn(arr[i], i, arr);
      }
    }
  }

  /**
   * map
   * @static
   * @param {Array<any>} arr
   * @param {Function} fn
   * @return {Array<any>}
   * @memberof ArrayMethods
   */
  static map(arr, fn) {
    if (isArray(arr)) {
      const result = [];
      const { length } = arr;
      for (let i = 0; i < length; i++) {
        result.push(fn(arr[i], i, arr));
      }
      return result;
    }
    return arr;
  }

  /**
   * reduce
   * @static
   * @param {Array<any>} arr
   * @param {Function} fn
   * @param {any} initial 初始值
   * @return {any}
   * @memberof ArrayMethods
   */
  static reduce(arr, fn, initial) {
    if (isArray(arr)) {
      // 如果没有初始值, 那么初始值等于第一个元素
      const { length } = arr;
      let i = 0;
      if (initial === undefined) {
        if (arr.length === 0) {
          throw new TypeError('Reduce of empty array with no initial value');
        }
        [initial] = arr;
      } else {
        i = 1;
      }
      console.log('initial=', initial);
      for (; i < length; i++) {
        initial = fn(initial, arr[i], i);
      }
      return initial;
    }
    return arr;
  }

  static includes() {}

  static filter() {}

  static every() {}

  static some() {}

  static find() {}

  /**
   * 扁平化数组
   * @static
   * @param {Array<any>} arr
   * @return {Array<any>}
   * @memberof ArrayMethods
   */
  static flat(arr) {
    if (isArray(arr)) {
      const { length } = arr;
      const result = [];
      for (let i = 0; i < length; i++) {
        if (isArray(arr[i])) {
          // 注意将结果展开
          result.push(...ArrayMethods.flat(arr[i]));
        } else {
          result.push(arr[i]);
        }
      }
      return result;
    }
    return arr;
  }

  static intersection() {

  }

  static union() {

  }

  static decar() {

  }
}
