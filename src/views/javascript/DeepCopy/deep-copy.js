/**
 * 判断是否为数组
 * @param {*} arr
 * @return {*}
 */
function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
}

/**
 * 判断是否为对象
 * @param {*} obj
 * @return {*}
 */
function isObject(obj) {
  return (typeof obj === 'object' || typeof obj === 'function') && obj !== null;
}

/**
 * 深拷贝
 * @class DeepCopy
 */
class DeepCopy {
  /**
   * 递归实现
   * 基础版本
   * @static
   * @param {Object | Array<any>} obj
   * @return {Object | Array<any>}
   * @memberof DeepCopy
   */
  static recursive(obj) {
    // 如果为基本类型, 则直接返回
    if (!isObject(obj)) {
      return obj;
    }
    // 如果为数组, 则循环复制每一项
    if (isArray(obj)) {
      return obj.map((item) => DeepCopy.recursive(item));
    }
    const result = {};
    // 遍历对象每一项
    for (const key in obj) {
      // for...in会把原型链上的属性遍历出来, 需要过滤, 实际效果等于 Object.keys
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        // 如果为对象则递归调用复制
        if (isObject(obj[key])) {
          result[key] = DeepCopy.recursive(obj[key]);
        } else {
          result[key] = obj[key];
        }
      }
    }
    return result;
  }

  /**
   * 递归实现
   * 基础版本+破除循环引用
   * @static
   * @param {Object | Array<any>} obj 拷贝的对象
   * @param {WeakMap} [map=new WeakMap()] 记录已经拷贝过的对象
   * @return {Object | Array<any>}
   * @memberof DeepCopy
   */
  static recursiveCircularRef(obj, map = new WeakMap()) {
    // 如果为基本类型, 或者对象已经被拷贝, 则直接返回
    if (!isObject(obj) || map.has(obj)) {
      return obj;
    }
    // 如果为数组, 则循环复制每一项
    if (isArray(obj)) {
      return obj.map((item) => DeepCopy.recursiveCircularRef(item));
    }
    const result = {};
    // 遍历对象每一项
    for (const key in obj) {
      // for...in会把原型链上的属性遍历出来, 需要过滤, 实际效果等于 Object.keys
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        // 如果为对象则递归调用复制
        if (isObject(obj[key])) {
          map.set(obj[key], true);
          result[key] = DeepCopy.recursiveCircularRef(obj[key], map);
        } else {
          result[key] = obj[key];
        }
      }
    }
    return result;
  }

  /**
   * 迭代实现
   * @static
   * @param {Object | Array<any>} obj
   * @return {Object | Array<any>}
   * @memberof DeepCopy
   */
  static iterative(obj) {
    if (!isObject(obj)) {
      return obj;
    }
    return obj;
  }
}

export default DeepCopy;
