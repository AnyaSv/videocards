<template>
  <div class="filter-menu">
    <div class="sort-container">
      <el-radio-group v-model="Order" size="large">
        <el-radio-button v-for="(item, index) in SortFunc" :key="index" :label="item.label" :value="index" />
      </el-radio-group>
    </div>

    <div class="search-container">
      <span>Поиск:</span>
      <input v-model="FindStr" placeholder="Введите запрос..." class="input-find" />
    </div>
  </div>

  <div class="video-list">
    <VideoCard v-for="item in OrderedList" :key="item.id" :mysupervar="item" />
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import VideoCard from '@/components/VideoCard.vue';
import { videocards } from '@/dataset';
import { SortFunc } from '@/lib/SortFunc.js';

const List = reactive(videocards);
const Order = ref(0);
const FindStr = ref('');

const OrderedList = computed(() => List.filter(Find).sort(SortFunc[Order.value].func));

function Find(item) {
  const lowerCaseQuery = FindStr.value.toLowerCase();
  return (
    item.name.toLowerCase().includes(lowerCaseQuery) ||
    item.manufacturer.toLowerCase().includes(lowerCaseQuery)
  );
}
</script>

<style scoped>
.filter-menu {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.sort-container {
  flex: 1; 
}

.search-container {
  display: flex;
  align-items: center;
}

.input-find {
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-left: 10px;
  width: 200px;
}

.video-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
