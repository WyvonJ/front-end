<template>
  <div class="extend">
    <FeButton @click="handlerExtend1">
      原型链继承
    </FeButton>
    <FeButton @click="handlerExtend2">
      借用构造函数继承
    </FeButton>
    <FeButton @click="handlerExtend3">
      组合继承
    </FeButton>
    <FeButton @click="handlerExtend4">
      原型式继承
    </FeButton>
    <FeButton @click="handlerExtend5">
      寄生式继承
    </FeButton>
    <FeButton @click="handlerExtend6">
      寄生组合式继承
    </FeButton>
  </div>
</template>

<script>
// 继承
export default {
  name: 'Extend',
  data() {
    return {

    };
  },
  methods: {
    // 继承方法

    // 原型链继承
    handlerExtend1() {
      function Parent() {
        this.prop = 'parent property';
        this.nums = [1, 2, 3];
      }
      function Child() { }
      // 实现继承
      Child.prototype = new Parent();
      // 只能进行单继承, 新实例无法向父类传参
      // 而且
      const child = new Child();
      console.log(child.prop);
      console.log(child instanceof Parent); // false

      // 问题: 所有child都共享同一个nums属性
      const child1 = new Child();
      const child2 = new Child();

      child1.nums.push(4);
      console.log(child2.nums); // [1,2,3,4]
    },
    // 借用构造函数继承
    handlerExtend2() {
      function Parent() {
        this.prop = 'parent property';
        this.nums = [1, 2, 3];
      }
      function Child() {
        // 将父类的构造函数用call在子类实例(this)上调用一下即可
        Parent.call(this);
        // 但是由于可以多次call, 所以可以实现多继承
      }
      const child = new Child();
      console.log(child.prop);
      // 子类非父类的实例了
      console.log(child instanceof Parent); // false
    },
    // 组合继承(组合原型链继承和借用构造函数继承)
    handlerExtend3() {
      function Parent() {
        this.prop = 'parent property';
        this.colors = ['green', 'red'];
      }
      function Child() {
        Parent.call(this);
      }
      // 弊端在于实例上和原型上都会有colors属性
      Child.prototype = new Parent();
      const child = new Child();
      console.log(child.prop);
      console.log(child instanceof Parent); // true

      const child1 = new Child();
      const child2 = new Child();

      console.log(child1, child2);

      child1.colors.push('yellow');
      console.log(child2.colors); // [1,2,3,4]
    },
    // 原型式继承
    handlerExtend4() {
      function Parent() {
        this.prop = 'parent property';
      }
      // 封装一个函数容器
      function object(obj) {
        function F() { }
        F.prototype = obj;
        return new F();
      }
      const parent = new Parent();
      const child = object(parent);
      console.log(child.prop);
      console.log(child instanceof Parent); // true
    },
    // 寄生式继承
    handlerExtend5() {
      function Parent() {
        this.prop = 'parent property';
      }
      // 封装一个函数容器
      function content(obj) {
        function F() { }
        F.prototype = obj;
        return new F();
      }

      function childObject(obj) {
        const p = content(obj);
        p.name = 'sss';
        return p;
      }
      const parent = new Parent();
      const child = childObject(parent);
      console.log(child.prop);
      console.log(child instanceof Parent); // true
    },
    // 寄生组合式继承
    handlerExtend6() {
      function Parent() {
        this.prop = 'parent property';
        this.colors = ['green', 'red'];
      }
      Parent.prototype.sayColors = function sayColors() {
        console.log(this.colors);
      };
      function Child() {
        Parent.call(this);
      }

      function object(obj) {
        function F() { }
        F.prototype = obj;
        return new F();
      }

      function inheritPrototype(parent, child) {
        // 创建以父类原型为原型的对象
        const prototype = object(parent.prototype);
        prototype.constructor = child; // 增强对象
        child.prototype = prototype;
      }

      const child = new Child();

      inheritPrototype(Parent, Child);

      const child1 = new Child();
      const child2 = new Child();

      child1.colors.push(4);
      console.log(child2.colors);

      console.log(child.prop);
      console.log(child instanceof Parent); // true
    },
  },
};
</script>

<style lang="scss">
.extend {
}
</style>
