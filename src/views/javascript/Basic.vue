<template>
  <div class="basic">
    <FeButton @click="handlerTypeof"> typeof返回结果 </FeButton>
    <FeButton @click="handlerInstanceof"> instanceof返回结果 </FeButton>
  </div>
</template>

<script>
// JavaScrit基础
export default {
  name: 'Basic',
  data() {
    return {

    };
  },
  methods: {
    // typeof返回结果
    handlerTypeof() {
      console.log(typeof 1); // number
      console.log(typeof 'str'); // string
      console.log(typeof undefined); // undefined
      console.log(typeof false); // boolean
      console.log(typeof {}); // object
      console.log(typeof null); // object
      console.log(typeof []); // object
    },
    // instanceof返回结果
    handlerInstanceof() {
      console.log(1 instanceof Number); // false
      console.log(true instanceof Boolean); // false
      console.log('str' instanceof String); // false
      console.log([] instanceof Array); // true
      console.log(function foo() {} instanceof Function); // true
      console.log({} instanceof Object); // true
    },
  },
};
</script>

<style lang="scss">
.basic {
}
</style>
