<template>
  <!-- 两栏布局 -->
  <div class="two-column">
    <h1>两栏布局</h1>
    <h2>左侧固定 右侧自适应</h2>

    <h2>方案1: 使用浮动float</h2>
    <div class="container-1">
      <div class="left"></div>
      <div class="right"></div>
    </div>

    <h2>方案2: 使用绝对定位</h2>
    <div class="container-2">
      <div class="left"></div>
      <div class="right"></div>
    </div>

    <h2>方案3: 使用float + calc()函数</h2>
    <div class="container-3">
      <div class="left"></div>
      <div class="right"></div>
    </div>

    <h2>方案4: 使用inline-block + calc()函数</h2>
    <div class="container-4">
      <div class="left"></div>
      <div class="right"></div>
    </div>

    <h2>方案5: 使用flexbox</h2>
    <div class="container-5">
      <div class="left"></div>
      <div class="right"></div>
    </div>

    <h2>方案6: 使用overflow:hidden触发BFC</h2>
    <div class="container-6">
      <div class="left"></div>
      <div class="right"></div>
    </div>
  </div>
</template>

<style lang="scss">
.two-column {
  width: 100%;
  height: 100%;

  [class^="container-"] {
    // width: 600px;
    height: 50px;
    border: 1px solid #6723d4;
  }

  .left {
    background-color: #0771d4;
    height: 50px;
  }

  .right {
    background-color: #df187c;
    height: 50px;
  }

  .container-1 {
    .left {
      width: 300px;
      // 左边浮动, 产生BFC
      float: left;
    }
    .right {
      // 需要给一个margin-left = 左边的宽度
      margin-left: 300px;
    }
  }

  .container-2 {
    position: relative;
    .left {
      width: 300px;
      // 绝对定位, 产生BFC
      position: absolute;
      left: 0;
      top: 0;
    }
    .right {
      position: absolute;
      // 左侧定位到左边的宽度位置,并且右侧需要给0保证有宽度
      left: 300px;
      right: 0px;
    }
  }

  .container-3 {
    // 两边都向左浮动, 给右边一个calc()来计算自定义宽度
    .left {
      width: 300px;
      float: left;
    }
    .right {
      float: left;
      width: calc(100% - 300px);
    }
  }

  .container-4 {
    // 两边设置为inline-block, 给右边一个calc()来计算自定义宽度
    .left {
      width: 300px;
      // inline-block 也会生成BFC
      display: inline-block;
    }
    .right {
      width: calc(100% - 300px);
      display: inline-block;
    }
  }

  .container-5 {
    display: flex;
    .left {
      // flex-grow: 0;
      // flex-shrink: 0;
      // flex-basis: 300px;
      flex: 0 0 300px;
    }
    .right {
      // flex-grow: 1;
      // flex-shrink: 1;
      // flex-basis: 0%;
      flex: 1;
    }
  }

  .container-6 {
    .left {
      width: 300px;
      float: left;
    }
    .right {
      overflow: hidden;
    }
  }
}
</style>
