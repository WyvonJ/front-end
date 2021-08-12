<template>
  <div class="array-methods">
    <FeButton @click="handlerForEach">
      forEach
    </FeButton>
    <FeButton @click="handlerMap">
      map
    </FeButton>
    <FeButton @click="handlerReduce">
      reduce
    </FeButton>
    <FeButton @click="handlerFlat">
      flat
    </FeButton>
  </div>
</template>

<script>
// 数组自带方法实现
import ArrayMethods from './ArrayMethods/array-methods';

export default {
  name: 'ArrayMethods',
  data() {
    return {

    };
  },
  methods: {
    handlerForEach() {
      const arr = [{}, { value: 3 }, { p: '11' }];
      ArrayMethods.forEach(arr, (item, index) => {
        item.value = index;
      });
      console.log(arr);
    },
    // 映射
    handlerMap() {
      const arr = [1, 2, 3, 4, 5];
      const map = ArrayMethods.map(arr, (item, index) => ({
        item,
        index,
      }));
      console.log(map);
    },
    // reduce
    handlerReduce() {
      const arr = [1];
      // 只有一项, 且无初始值时原生reduce不进循环
      const reduce1 = arr.reduce((pre, cur) => ({ cur }));
      const reduce2 = ArrayMethods.reduce(arr, (pre, cur) => ({ cur }));
      console.log(reduce1);
      console.log(reduce2);
    },
    // 扁平化
    handlerFlat() {
      const arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
      const flat = ArrayMethods.flat(arr);
      console.log(flat);
    },
  },
};
</script>

<style lang="scss">
.array-methods {
}
</style>
