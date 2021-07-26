<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  created() {
    const arr = [1, 2, 3];
    const obj = Object.create(arr);
    // obj.push(2, 3);
    console.log(obj);
  },
};
</script>
