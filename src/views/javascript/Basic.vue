<template>
  <div class="basic">
    <FeButton @click="handlerTypeof">
      typeof返回结果
    </FeButton>
    <FeButton @click="handlerInstanceof">
      instanceof返回结果
    </FeButton>
    <FeButton @click="handlerToString">
      toString方法
    </FeButton>
    <FeButton @click="handlerTypeConversion">
      类型转换
    </FeButton>
  </div>
</template>

<script>
// JavaScrit基础
import chalk from '@/utils/chalk';

export default {
  name: 'Basic',
  data() {
    return {

    };
  },
  methods: {
    // typeof返回结果 number string boolean undefined function object symbol bigint
    handlerTypeof() {
      console.log(typeof 1); // number
      console.log(typeof 'str'); // string
      console.log(typeof undefined); // undefined
      console.log(typeof false); // boolean
      console.log(typeof {}); // object
      console.log(typeof null); // object
      console.log(typeof []); // object
      console.log(typeof NaN); // number
      // 函数返回function, 其他引用类型返回object
      console.log(typeof Object); // function
      // 正则表达式为 object
      console.log(typeof /./); // object
      // Symbol为symbol
      console.log(typeof Symbol(1)); // symbol
      // BigInt为bigint
      // eslint-disable-next-line
      console.log(typeof BigInt(999999999999999));
    },
    // instanceof返回结果
    handlerInstanceof() {
      // 只要当前的类出现在实例的原型上, 结果就是true
      // 缺点1:不能检测基本数据类型
      console.log(1 instanceof Number); // false
      console.log(true instanceof Boolean); // false
      console.log('str' instanceof String); // false
      console.log([] instanceof Array); // true
      console.log(function foo() {} instanceof Function); // true
      console.log({} instanceof Object); // true
      // 缺点2:所有引用类型在instanceof Object时都为true
      console.log([] instanceof Object); // true
      console.log(window instanceof Object); // true
      console.log(Array instanceof Object); // true
    },
    // toString方法
    handlerToString() {
      // Object原型自带方法, 调用该方法可以统一返回格式为[object Xxx]的字符串, 其中Xxx是对象的类型
      console.log(({}).toString()); // [object Object]
      console.log(Object.prototype.toString.call({})); // [object Object]
      // Array上也有这个方法, 不过是将数组转换为字符串
      console.log([].toString()); // ''
      console.log([1].toString()); // 1
      // 具体转换为对每一项调用对应原型上的toString方法,然后用逗号分隔
      console.log([1, 2, 3].toString()); // 1,2,3
      console.log([1, 2, []].toString()); // 1,2,
      console.log([1, [], 2].toString()); // 1,,2
      console.log([1, 2, {}].toString()); // 1,2,[object Object]
      // 嵌套数组先转为3,4,5
      console.log([1, 2, [3, 4, 5]].toString()); // 1,2,3,4,5
      // 对于其他类型想要获取[object Xxx], 需要调用Object.prototype.toString.call
      console.log(Object.prototype.toString.call([])); // [object Array]
      console.log(Object.prototype.toString.call(1)); // [object Number]
      console.log(Object.prototype.toString.call('s')); // [object String]
      console.log(Object.prototype.toString.call(true)); // [object Boolean]
      console.log(Object.prototype.toString.call(null)); // [object Null]
      console.log(Object.prototype.toString.call(undefined)); // [object Undefined]
      console.log(Object.prototype.toString.call(() => {})); // [object Function]
      console.log(Object.prototype.toString.call(new Date())); // [object Date]
      console.log(Object.prototype.toString.call(/\d+/)); // [object RegExp]
      console.log(Object.prototype.toString.call(Symbol(2))); // [object Symbol]
      console.log(Object.prototype.toString.call(document)); // [object HTMLDocument]
      console.log(Object.prototype.toString.call(window)); // [object Window]
    },
    // 类型转换
    handlerTypeConversion() {
      // JS中类型转换只能转换为布尔值, 数字, 字符串

      /* 转换为布尔值 */
      console.log(...chalk.red('-----转换为布尔值-----'));
      // number转换为布尔值, 只有0, -0, NaN被转换为false, 其他任意数字都为true
      console.log(!!0, !!(-0), !!NaN); // false false false
      // string转换为布尔值, 只有空字符串''被转换为false, 其他都为true
      console.log(!!''); // false
      // undefined, null转为布尔值, 都为false
      console.log(!!undefined, !!null); // false false
      // 引用类型, 转换为true
      console.log(!!({}), !![], !!window); // true true true

      console.log(...chalk.red('-----转换为字符串-----'));
      // number转换为字符串, 原样转换
      console.log(`${0}`, `${1}`, `${1.1}`, `${NaN}`, `${Infinity}`, `${1 / 3}`); // 0 1 1.1 NaN Infinity 0.3333333333333333
      // boolean转换, 原样输出
      console.log(`${true}`, `${false}`); // true false
      // Symbol转换, 报错, Cannot convert a Symbol value to a string
      try {
        console.log(`${Symbol(1)}`, `${Symbol('sss')}`);
      } catch (error) {
        console.log(error.message);
      }
      // 数组, 同上toString方法
      console.log(`${[1, 2, 3]}`); // 1,2,3
      // 对象, 同上toString方法
      console.log(`${{}}`); // [object Object]

      /* 转换为数字 */
      console.log(...chalk.red('-----转换为数字-----'));
      // 字符串转换为数字, 只有本来就是正确数字的才能被转换为数字, 否则为NaN, 注意 .1 和 1.也能转换成功为0.1和1
      console.log(+'', +'1', +'1.1', +'.1', +'1.', +'1.a', +'1..1', +'1a', +'a', +'a1'); // 0 1 1.1 0.1 1 NaN NaN NaN NaN NaN
      // 数组转换, 空数组为0, 存在一个元素且能转为数字的转为数字(即该元素可以套用转换转为数字), 其他情况为NaN
      console.log(+[], +[1], +['2'], +[[]], +['a'], +[1, 2]); // 0 1 2 0 NaN NaN
      // null转为0
      console.log(+null); // 0
      // undefined转为NaN
      console.log(+undefined); // NaN
      // 除了数组的引用类型转为NaN
      console.log(+({}), +window, +/\d/);
      // Symbol转换, 报错, Cannot convert a Symbol value to a number
      try {
        console.log(+Symbol(1), +Symbol('sss'));
      } catch (error) {
        console.log(error.message);
      }

      // 对象转原始类型, 调用内置的[[ToPrimitive]]
      // 1. 如果已经是原始类型了，那就不需要转换了
      // 2. 调用 x.valueOf()，如果转换为基础类型，就返回转换的值
      // 3. 调用 x.toString()，如果转换为基础类型，就返回转换的值
      // 4. 如果都没有返回原始类型，就会报错
      // 也可以重写该方法
      const a = {
        valueOf() {
          return 0;
        },
        toString() {
          return '1';
        },
        [Symbol.toPrimitive]() {
          return 2;
        },
      };
      console.log(1 + a); // 3

      // 四则运算
      // 运算中其中一方为字符串, 那么会把另一方转换为字符串
      // 对于除了+运算符, 只要其中一方为数字, 那么就会把另一方转为数字

      // 比较运算符

      // == 隐式转换
      // 一方为null, 另一方必须为null或者undefined才会相等
      console.log(undefined == null, 0 == null); // true false

      // 面试题 使 n == 1 && n == 2 && n == 3成立
      console.log(...chalk.red('-----面试题 使 n == 1 && n == 2 && n == 3成立-----'));
      const n = {
        value: 0,
        valueOf() {
          return ++this.value;
        },
      };
      console.log(n == 1 && n == 2 && n == 3);
    },
  },
};
</script>

<style lang="scss">
.basic {
}
</style>
