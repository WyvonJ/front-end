<template>
  <div class="deep-copy">
    <FeButton @click="handlerRecursive">
      递归克隆
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
      obj: {
        a: 1,
        b: 'str',
        c: null,
        d: {
          e: 2,
        },
        e: [1, 2, 'ss', {
          f: 3,
        }],
      },
    };
  },
  methods: {
    handlerRecursive() {
      const copy = DeepCopy.recursive(this.obj);
      console.log(copy);
    },
  },
};
</script>

<style lang="scss">
.deep-copy {
}
</style>
