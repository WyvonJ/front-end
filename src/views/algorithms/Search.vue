<template>
  <div class="search">
    <FeButton @click="handlerBinary">
      二分查找
    </FeButton>
  </div>
</template>

<script>
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
      // const arr = [1, 3, 4, 5, 6, 7, 8, 10, 14, 18, 21, 25, 27, 31, 39, 55, 58, 64, 67, 78, 90];
      // const result = arr[0];
      // return result;
      const res = { 1: 222, 2: 123, 5: 888 };
      const result = new Array(12).fill(null);
      Object.keys(res).forEach((k) => {
        result[k] = res[k];
      });
      console.log(result);
    },

  },
};
</script>

<style lang="scss">
.search {
}
</style>
