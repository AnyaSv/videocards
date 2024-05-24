<template>
   <div class="home-container">
     <header class="header">
       <h1>Добро пожаловать на наш сайт</h1>
       <p>Здесь вы найдете лучшие видеокарты для вашего компьютера.</p>
       <button @click="goToCatalog" class="catalog-button">Перейти в каталог</button>
     </header>
     <main class="main-content">
       <section class="highlight">
         <h2>Лучшие предложения</h2>
         <div class="highlight-cards">
           <div class="highlight-card" v-for="item in highlightedItems" :key="item.id">
             <img :src="item.img" alt="Video card image" />
             <div class="highlight-card__info">
               <h3>{{ item.name }}</h3>
               <p>{{ item.description }}</p>
               <p><strong>Стоимость:</strong> {{ item.cost }} ₽</p>
             </div>
           </div>
         </div>
       </section>
     </main>
   </div>
 </template>
 
 <script setup>
 import { ref } from 'vue';
 import { useRouter } from 'vue-router';
 
 import Ph1 from '@/assets/Ph1.jpg';
 import Ph2 from '@/assets/Ph2.jpg';
 
 const router = useRouter();
 const goToCatalog = () => {
   router.push('/catalog');
 }
 
 const highlightedItems = ref([
   {
     id: 1,
     name: 'Супер видеокарта',
     description: 'Производительная видеокарта для игр.',
     cost: 350,
     img: Ph1 
   },
   {
     id: 2,
     name: 'Вторая видеокарта',
     description: 'Отличный выбор для офиса.',
     cost: 50,
     img: Ph2 
   }
 ]);
 </script>
 
 <style>
 
 .home-container {
   color: #333;
   padding: 20px;
 }
 
 .header {
   text-align: center;
   margin-bottom: 40px;
 }
 
 .header h1 {
   font-size: 2.5em;
   margin: 0.5em 0;
 }
 
 .header p {
   font-size: 1.2em;
   color: #666;
 }
 
 .catalog-button {
   padding: 10px 20px;
   font-size: 1em;
   color: #fff;
   background-color: #007bff;
   border: none;
   border-radius: 5px;
   cursor: pointer;
 }
 
 .catalog-button:hover {
   background-color: #0056b3;
 }
 
 .main-content {
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
 }
 
 .highlight {
   width: 100%;
   max-width: 800px;
   text-align: center;
 }
 
 .highlight h2 {
   font-size: 2em;
   margin-bottom: 20px;
 }
 
 .highlight-cards {
   display: flex;
   justify-content: space-around;
   flex-wrap: wrap;
 }
 
 .highlight-card {
   background: #f9f9f9;
   border: 1px solid #ddd;
   padding: 20px;
   margin: 10px;
   border-radius: 5px;
   width: 200px;
 }
 
 .highlight-card img {
   max-width: 100%;
   border-radius: 5px;
 }
 
 .highlight-card__info {
   text-align: left;
 }
 
 .highlight-card h3 {
   margin-top: 10px;
 }
 
 .highlight-card p {
   margin: 5px 0;
 }
 
 .highlight-card strong {
   color: #555;
 }
 </style>
 