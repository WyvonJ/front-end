function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
}

function isObject(obj) {
  return typeof obj === 'object' && obj !== null;
}

/**
 * 深拷贝
 * @class DeepCopy
 */
class DeepCopy {
  /**
   * 递归实现
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
      // 如果为对象则递归调用复制
      if (isObject(obj[key])) {
        result[key] = DeepCopy.recursive(obj[key]);
      } else {
        result[key] = obj[key];
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
