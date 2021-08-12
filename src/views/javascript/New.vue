<template>
  <div class="new">
    <FeButton @click="myNew">
      手写new
    </FeButton>
  </div>
</template>

<script>
// new
// new的过程
// 手写new
function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = () => {
  console.log('ww');
};

export default {
  name: 'New',
  methods: {
    // 自定义实现new
    myNew() {
      function $new(fn, ...arg) {
        // 建一个以构造函数的原型为原型的对象
        const obj = Object.create(fn.prototype);
        // 以obj为this, 将参数传入执行构造函数
        const ret = fn.apply(obj, arg);
        // 构造函数返回了实例则直接使用, 否则使用obj
        return ret instanceof Object ? ret : obj;
      }

      const dog1 = new Dog('ll');
      const dog2 = $new(Dog, 'ss');
      console.log(dog1);
      console.log(dog2);
    },
  },
};
</script>

<style lang="scss">
.new {
}
</style>
