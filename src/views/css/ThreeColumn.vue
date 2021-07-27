<template>
  <div class="three-column">
    <!-- 三栏布局 -->
    <h1>三栏布局</h1>
    <h2>两侧定宽, 中间自适应</h2>

    <h2>方案1: 使用浮动float+margin</h2>
    <div class="container-1">
      <div class="left"></div>
      <div class="right"></div>
      <!-- !!! 注意center在最后 -->
      <div class="center"></div>
    </div>

    <h2>方案2: 使用浮动float+overflow:hidden</h2>
    <div class="container-2">
      <div class="left"></div>
      <div class="right"></div>
      <!-- !!! 注意center在最后 -->
      <div class="center"></div>
    </div>

    <h2>方案3: flex布局</h2>
    <div class="container-3">
      <div class="left"></div>
      <div class="center"></div>
      <div class="right"></div>
    </div>

    <h2>方案4: table布局</h2>
    <div class="container-4">
      <div class="left"></div>
      <div class="center"></div>
      <div class="right"></div>
    </div>

    <h2>方案5: 使用定位</h2>
    <div class="container-5">
      <div class="left"></div>
      <div class="center"></div>
      <div class="right"></div>
    </div>

    <h2>方案6: 使用inline-block和calc()函数</h2>
    <div class="container-6">
      <div class="left"></div>
      <div class="center"></div>
      <div class="right"></div>
    </div>

    <h2>方案7: 圣杯布局</h2>
    <div class="container-7">
      <!-- 注意center在第一个 -->
      <div class="center"></div>
      <div class="left"></div>
      <div class="right"></div>
    </div>

    <h2>方案8: 双飞翼布局</h2>
    <div class="container-8">
      <!-- 添加一个容器 -->
      <div class="content">
        <!-- center添加margin得到具体宽度 -->
        <div class="center"></div>
      </div>
      <div class="left"></div>
      <div class="right"></div>
    </div>
  </div>
</template>

<style lang="scss">
.three-column {
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

  .center {
    background-color: #6723d4;
    height: 50px;
  }

  .right {
    background-color: #df187c;
    height: 50px;
  }

  // 左右两边分别浮动, 中间元素使用margin
  .container-1 {
    .left {
      width: 50px;
      float: left;
    }
    // 默认center会占据100%的宽度,所以用margin空出两边宽度
    .center {
      overflow: hidden;
    }

    .right {
      width: 100px;
      float: right;
    }
  }

  // 左右两边分别浮动, 中间元素使用overflow
  .container-2 {
    .left {
      width: 50px;
      float: left;
    }
    // overflow: hidden会绕开浮动元素
    .center {
      overflow: hidden;
    }

    .right {
      width: 100px;
      float: right;
    }
  }

  // flex布局
  .container-3 {
    display: flex;
    .left {
      flex: 0 0 50px;
    }
    // overflow: hidden会绕开浮动元素
    .center {
      flex: 1;
    }

    .right {
      flex: 0 0 100px;
    }
  }

  // table布局
  .container-4 {
    display: table;
    width: 100%;
    .left {
      display: table-cell;
      width: 50px;
    }
    // 设置左右之后中间元素会自动撑开宽度
    .center {
      display: table-cell;
    }

    .right {
      width: 100px;
      display: table-cell;
    }
  }

  // 使用定位
  .container-5 {
    position: relative;
    .left {
      position: absolute;
      left: 0;
      width: 50px;
    }
    // 设置左右之后中间元素会自动撑开宽度
    .center {
      position: absolute;
      left: 50px;
      right: 100px;
    }

    .right {
      position: absolute;
      right: 0;
      width: 100px;
    }
  }

  // 使用inline-block和calc()函数
  .container-6 {
    .left {
      width: 50px;
      display: inline-block;
    }
    // 设置左右之后中间元素会自动撑开宽度
    .center {
      width: calc(100% - 150px);
      display: inline-block;
    }

    .right {
      display: inline-block;
      width: 100px;
    }
  }

  // 圣杯布局
  .container-7 {
    margin-left: 50px;
    margin-right: 100px;
    .left {
      width: 50px;
      float: left;
      // 使left回到上一行最左侧
      margin-left: -100%;
      position: relative;
      left: -50px;
    }
    .center {
      float: left;
      width: 100%;
    }

    .right {
      width: 100px;
      float: left;
      margin-left: -100px;
      position: relative;
      right: -100px;
    }
  }
  // 双飞翼布局
  .container-8 {
    .left {
      width: 50px;
      float: left;
      margin-left: -100%;
    }
    .content {
      float: left;
      width: 100%;
    }
    .center {
      margin-left: 50px;
      margin-right: 100px;
    }

    .right {
      width: 100px;
      float: left;
      margin-left: -100px;
    }
  }
}
</style>
