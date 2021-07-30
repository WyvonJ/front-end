/**
 * 节流
 * 高频事件触发，但在n秒内只会执行一次
 * 所以节流会稀释函数的执行频率
 * @param {number} delay
 * @param {Function} fn
 * @return {Function}
 */
export function throttle(delay, fn) {
  return fn;
}

/**
 * 防抖
 * 触发高频事件后n秒内函数只会执行一次
 * 如果n秒内高频事件再次被触发，则重新计算时间
 * @param {number} delay
 * @param {Function} fn
 * @return {Function}
 */
export function debounce(delay, fn) {
  return fn;
}

// babel版本导致直接export default无法使用解构赋值import使用
export default {
  throttle,
  debounce,
};
