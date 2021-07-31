<template>
  <div class="this">

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
  beforeCreate() {
    console.log(typeof this);
  },
};
</script>

<style lang="scss">
.this {
}
</style>
