/**
 * 快速排序
 * 分治思想
 * 基线条件 数组为空或者只包含一个元素
 * @export
 * @class Quick
 */
export default class Quick {
  /**
   * 排序方法
   * @static
   * @param {Array<number>} arr
   * @return {Array<number>}
   * @memberof Quick
   */
  static run(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    const pivot = arr[0];
    const less = [];
    const greater = [];
    for (let i = 1; i < arr.length; i++) {
      const item = arr[i];
      if (item <= pivot) {
        less.push(item);
      } else {
        greater.push(item);
      }
    }
    return Quick.run(less).concat([pivot]).concat(Quick.run(greater));
  }
}
