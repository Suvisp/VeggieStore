<template>
    <div v-if="error"> {{ error }} </div>
    <div v-if="product">
      <h3 class="product-detail"> Product Details</h3>
      <p>{{ product.name }}</p>
    </div>
    <div v-else>Loading...</div>
  </template>
  
  <script setup lang="ts">
  import getProduct from '../composables/getProduct'
  
  const props = defineProps(['id'])
  
  const { product, error, load } = getProduct(props.id)
  console.log("getting one product id for details page " + props.id)
  
  load()
  </script>
  
  <style>
  .product-detail {
    color: rgb(0,135,0);
  }
  
  </style>