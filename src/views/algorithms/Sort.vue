<template>
  <div class="sort">
    <div>原始数组: {{ arr }}</div>
    <div>
      <FeButton @click="handlerBubble">
        冒泡排序
      </FeButton>
      <span>耗时: {{ bubbleTime }}ms</span>
    </div>
    <div>
      <FeButton @click="handlerSelection">
        选择排序
      </FeButton>
      <span>耗时: {{ selectionTime }}ms</span>
    </div>
    <div>
      <FeButton @click="handlerInsertion">
        插入排序
      </FeButton>
      <span>耗时: {{ insertionTime }}ms</span>
    </div>
    <div>
      <FeButton @click="handlerQuick">
        快速排序
      </FeButton>
      <span>耗时: {{ quickTime }}ms</span>
    </div>
  </div>
</template>

<script>
import Sort from './Sort/sort';
import bigData from './Sort/data.json';

// 排序
export default {
  name: 'Sort',
  data() {
    return {
      arr: [3, 1, 2, 3, 4, 5, 6, 9, 7, 4],
      result: [],
      bubbleTime: 0,
      selectionTime: 0,
      quickTime: 0,
      insertionTime: 0,
    };
  },
  methods: {
    handlerBubble() {
      const copy = bigData.slice(0);
      console.time('冒泡排序');
      const start = Date.now();
      const result = Sort.Bubble.run(copy);
      const end = Date.now();
      this.bubbleTime = end - start;
      console.timeEnd('冒泡排序');
      console.log(result.length);
    },
    handlerSelection() {
      const copy = bigData.slice(0);
      console.time('选择排序');
      const start = Date.now();
      const result = Sort.Selection.run(copy);
      const end = Date.now();
      this.selectionTime = end - start;
      console.timeEnd('选择排序');
      console.log(result.length);
    },
    handlerInsertion() {
      const copy = bigData.slice(0);
      console.time('插入排序');
      const start = Date.now();
      const result = Sort.Insertion.run(copy);
      const end = Date.now();
      this.selectionTime = end - start;
      console.timeEnd('插入排序');
      console.log(result.length);
    },
    handlerQuick() {
      const copy = bigData.slice(0);
      console.time('快速排序');
      const start = Date.now();
      const result = Sort.Quick.run(copy);
      const end = Date.now();
      console.timeEnd('快速排序');
      this.quickTime = end - start;
      console.log(result.length);
    },
  },
};
</script>

<style lang="scss">
.sort {
}
</style>
