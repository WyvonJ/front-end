<template>
  <div class="search">
    <FeButton @click="handlerBinary">
      二分查找
    </FeButton>
  </div>
</template>

<script>
import Search from './Search/search';
// 查找
export default {
  name: 'Search',
  data() {
    return {

    };
  },
  methods: {
    // 二分查找
    handlerBinary() {
      const arr = [1, 3, 4, 5, 6, 7, 8, 10, 14, 18, 21, 25, 27, 31, 39, 55, 58, 64, 67, 78, 90];
      const result = Search.run(arr);
      console.log(result);
    },
  },
};
</script>

<style lang="scss">
.search {
}
</style>
