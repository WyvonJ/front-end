<template>
  <div class="deep-copy">
    <FeButton @click="handlerRecursive">
      递归克隆
    </FeButton>
    <FeButton @click="handlerRecursiveCircularRef">
      递归克隆 (循环引用)
    </FeButton>
  </div>
</template>

<script>
// 手写深拷贝
import DeepCopy from './DeepCopy/deep-copy';

export default {
  name: 'DeepCopy',
  data() {
    return {
    };
  },
  methods: {
    // 递归克隆
    handlerRecursive() {
      const obj = {
        a: 1,
        b: 'str',
        c: null,
        d: {
          e: 2,
        },
        e: [1, 2, 'ss', {
          f: 3,
        }],
      };
      const copy = DeepCopy.recursive(obj);
      console.log(copy);
    },
    // 循环引用对象拷贝
    handlerRecursiveCircularRef() {
      const circularRefObj = {
        value: 1,
      };
      circularRefObj.target = circularRefObj;
      const copy = DeepCopy.recursiveCircularRef(circularRefObj);
      console.log(copy);
    },
  },
};
</script>

<style lang="scss">
.deep-copy {
}
</style>
