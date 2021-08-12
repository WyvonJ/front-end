<template>
  <div class="reactivity">
    <FeButton @click="handlerArrayDefineProperty">
      数组索引设置defineProperty
    </FeButton>
  </div>
</template>

<script>
// 响应式
export default {
  name: 'Reactivity',
  components: {

  },
  data() {
    return {

    };
  },
  methods: {
    handlerArrayDefineProperty() {
      const arr = [1, 2, 3];
      // 已知长度的数组是可以通过索引设置访问器属性的, 但是通过push等方法新添加的元素
      // 因为数组所添加的索引值未添加到数据拦截中, 所以无法进行拦截处理
      arr.forEach((item, i) => {
        Object.defineProperty(arr, i, {
          get() {
            console.log('get');
            return item;
          },
          set(v) {
            console.log('set');
            item = v;
          },
        });
      });
      arr[1] = 4;
      console.log(arr); // [1, 4, 3]

      // 通过Proxy可以完美解决这个问题, push等数组方法都能进行拦截处理
    },
  },
};
</script>

<style lang="scss">
.reactivity {
}
</style>
