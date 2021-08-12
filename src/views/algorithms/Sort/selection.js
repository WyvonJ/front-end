/**
 * 选择排序
 * 每次从当前数组中找到最小的一个数并加入到数组中
 * @export
 * @class Selection
 */
export default class Selection {
  /**
   * 排序方法
   * @static
   * @param {Array<number>} arr
   * @return {Array<number>}
   * @memberof Selection
   */
  static run(arr) {
    const result = [];
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      result.push(this.findSmallest(arr));
    }
    return result;
  }

  /**
   * 找出最小值
   * @static
   * @param {Array<number>} arr
   * @return {number}
   * @memberof Selection
   */
  static findSmallest(arr) {
    let smallest = arr[0];
    let smallistIndex;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < smallest) {
        smallest = arr[i];
        smallistIndex = i;
      }
    }
    arr.splice(smallistIndex, 1);
    return smallest;
  }
}
