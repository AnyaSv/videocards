<template>
  <div class="catalog-header">
    <span>Каталог видеокарт</span>
  </div>

  <div class="filter-menu">
    <div class="sort-container">
      <el-radio-group v-model="Order" size="large">
        <el-radio-button v-for="(item, index) in SortFunc" :key="index" :label="item.label" :value="index" />
      </el-radio-group>
    </div>

    <div class="price-filter">
      <span>Цена:&nbsp;&nbsp;</span>
      <el-slider
        v-model="priceRange"
        :min="minPrice"
        :max="maxPrice"
        :format-tooltip="formatPriceTooltip"
        range
      ></el-slider>
    </div>

    <div class="search-container">
      <span>Поиск:</span>
      <input v-model="FindStr" placeholder="Введите запрос..." class="input-find" />
    </div>
  </div>

  <div class="video-list">
    <VideoCard v-for="item in filteredList" :key="item.id" :mysupervar="item" />
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
const minPrice = ref(0); 
const maxPrice = ref(250); 
const priceRange = ref([minPrice.value, maxPrice.value]); 

const OrderedList = computed(() => List.filter(Find).filter(PriceFilter).sort(SortFunc[Order.value].func));

function Find(item) {
  const lowerCaseQuery = FindStr.value.toLowerCase();
  return (
    item.name.toLowerCase().includes(lowerCaseQuery) ||
    item.manufacturer.toLowerCase().includes(lowerCaseQuery)
  );
}

function PriceFilter(item) {
  const itemCost = item.cost;
  return itemCost >= priceRange.value[0] && itemCost <= priceRange.value[1];
}

const formatPriceTooltip = (val) => `${val} ₽`;

const filteredList = computed(() => OrderedList.value);

</script>

<style scoped>
.catalog-header {
  text-align: center;
  margin-bottom: 20px;
  font-size: 2em;
  font-weight: bold;
}

.filter-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.sort-container {
  flex: 1; 
}

.price-filter {
  display: flex;
  align-items: center;
  flex: 1; 
  margin-right: 100px;
}

.el-slider {
  width: 60%; 
  margin-left: 10px; 
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
