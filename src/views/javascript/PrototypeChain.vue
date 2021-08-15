<template>
  <div class="prototype-chain">
    <FeButton @click="handlerPrototype1">
      原型链1
    </FeButton>
    <FeButton @click="handlerPrototype2">
      原型链2
    </FeButton>
  </div>
</template>

<script>
// 原型链
export default {
  name: 'PrototypeChain',
  components: {

  },
  data() {
    return {

    };
  },
  methods: {
    handlerPrototype1() {
      // 无论何时,只要创建一个函数,就会按照特定规则为这个函数创建一个prototype属性
      // 默认情况下,所有原型对象获得一个constructor属性, 指向原函数
      // 即:
      function Chain() {}
      console.log(Chain.prototype.constructor === Chain); // true
      const chain = new Chain();
      console.log(chain.constructor === Chain); // true
      // eslint-disable-next-line
      console.log(chain.__proto__ === Chain.prototype); // true
      console.log(Object.getPrototypeOf(chain) === Chain.prototype); // true

      // 实例与构造函数原型之间有直接联系, 但实例与构造函数之间没有
    },
    handlerPrototype2() {
      // 原型链基本模式
      function Parent() {
        this.prop = 'parent';
      }

      function Child() {

      }
      /** ****   实现继承   **** */
      Child.prototype = new Parent();

      const child = new Child();
      // 在child上找prop时会查找 原型链 即 __proto__, 找到Parent对象上
      console.log(child.prop); // 'parent'

      // 子类不但能通过原型链找到父类的方法, 还与父类的原型挂钩
      // 因此
      console.log(child instanceof Child); // true
      console.log(child instanceof Parent); // true

      // 这样就形成了  child.__proto__ -> parent.__proto__ -> Object.prototype 的链条
    },
  },
};
</script>

<style lang="scss">
.prototype-chain {

}
</style>
