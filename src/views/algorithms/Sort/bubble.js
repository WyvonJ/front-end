/**
 * 冒泡排序
 * 相邻两个比较, 碰到左边大的话就进行交换, 一直到将大的数移到最后的位置为止
 * @export
 * @class Bubble
 */
export default class Bubble {
  /**
   * 排序方法
   * @static
   * @param {Array<number>} arr
   * @return {Array<number>}
   * @memberof Bubble
   */
  static run(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }

  /**
   * 优化版本1
   * @static
   * @param {Array<number>} arr
   * @return {Array<number>}
   * @memberof Bubble
   */
  static runOp1(arr) {
    let i = arr.length - 1;
    while (i > 0) {
      let pos = 0;
      for (let j = 0; j < i; j++) {
        if (arr[j] > arr[j + 1]) {
          pos = j;
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
      i = pos;
    }
    return arr;
  }
}
