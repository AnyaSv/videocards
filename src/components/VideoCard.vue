<template>
  <div class="video-card" @mouseover="showDetails = true" @mouseleave="showDetails = false">
    <img :src="mysupervar.img" alt="Video card image" />
    <div class="video-card__details">
      <div class="video-card__name">{{ mysupervar.name }}</div>
      <div class="video-card__manufacturer">Производитель: {{ mysupervar.manufacturer }}</div>
      <div class="video-card__ram" v-if="showDetails">RAM: {{ mysupervar.ram.value }} {{ mysupervar.ram.unit }}</div>
      <div class="video-card__cost">{{ mysupervar.cost }} ₽</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
defineProps(['mysupervar']);

const showDetails = ref(false);
</script>

<style>
.video-card {
  display: flex;
  align-items: center;
  border-radius: 5px;
  box-shadow: 1px 1px 5px rgba(0,0,0,.25);
  margin: 20px;
  padding: 20px;
  width: 80%;
  background-color: #f9f9f9;
  transition: box-shadow 0.3s ease;
}

.video-card img {
  width: 150px;
  height: auto;
  border-radius: 5px;
  margin-right: 20px;
}

.video-card__details {
  display: flex;
  flex-direction: column;
  text-align: left;
  flex: 1;
  line-height: 1;
}

.video-card__name {
  font-size: 1.5em;
  font-weight: bold;
}

.video-card__manufacturer {
  font-size: 1.2em;
  color: #666;
}

.video-card__ram {
  font-size: 1.2em;
  color: #666;
}

.video-card__cost {
  font-size: 2em;
  font-weight: bold;
  margin-left: auto;
}
</style>
