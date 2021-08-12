<template>
  <div class="this">
    <FeButton @click="handlerThis">
      This
    </FeButton>
  </div>
</template>

<script>
// this指向问题
export default {
  name: 'This',
  data() {
    return {

    };
  },
  methods: {
    handlerThis() {
      const arr = [1, 2, 3];
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
    },
  },
};
</script>

<style lang="scss">
.this {
}
</style>
