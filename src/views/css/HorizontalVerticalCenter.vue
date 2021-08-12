<template>
  <div class="horizontal-vertical-center">
    <h1>水平垂直居中</h1>
    <!-- flex容器 -->
    <h2>方案1: flex</h2>
    <div class="container-1">
      <div class="child"></div>
    </div>
    <h2>方案2: text-center</h2>
    <div class="container-2">
      <div class="child"></div>
    </div>
    <h2>方案3: 利用绝对定位</h2>
    <div class="container-3">
      <div class="child"></div>
    </div>
    <h2>方案4: table-cell</h2>
    <div class="container-4">
      <div class="child"></div>
    </div>
    <h2>方案5: text-center</h2>
    <div class="container-5">
      <div class="child"></div>
    </div>
  </div>
</template>

<script>
// 垂直居中的方式
export default {
  name: 'HorizontalVerticalCenter',
};
</script>

<style lang="scss">
.horizontal-vertical-center {
  [class^="container-"] {
    width: 200px;
    height: 200px;
    background-color: #00c5ab;
    .child {
      width: 100px;
      height: 100px;
      background-color: #c5b522;
    }
  }
  // flex
  .container-1 {
    display: flex;
    // justify-content: center;
    // align-items: center;
    // 直接在child 中写margin auto也行
    .child {
      margin: auto
    }
  }
  // inline-block: text-align:center
  .container-2 {
    text-align: center;
    .child {
      display: inline-block;
      vertical-align: middle;
    }
  }
  // 绝对定位
  .container-3 {
    position: relative;
    // .child {
    //   position: absolute;
    //   left: calc(50% - 50px);
    //   top: calc(50% - 50px);
    // }
    // 也可以用translate
    .child {
      position: absolute;
      // 离父级边的50%, 所以child的左上角的点会到父元素的中心
      top: 50%;
      left: 50%;
      // 根据自身的百分比
      transform: translate(-50%, -50%);
    }
  }

  // table
  .container-4 {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    .child {
      display: inline-block;
    }
  }

}
</style>
