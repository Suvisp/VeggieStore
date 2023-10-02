<template>
    <div>
    <form>
      <div v-if="error"> {{ error }} </div>
      <div v-if="product">
        <p>Product name: {{ product.name }}</p>
        <p>Product price: {{ product.price }}</p>
      </div>
      <div v-else>Loading...</div>
    </form>
    </div>
    </template>
    
    <script setup lang="ts">
    import getProduct from '../composables/getProduct'
    
    const props = defineProps(['product', 'id'])
    
    const { product, error, load } = getProduct(props.id)
    console.log("getting one product ", product)
    
    load()

    </script>
    
    <style>
    .product-detail {
      color: rgb(0,135,0);
    }
    
    </style>