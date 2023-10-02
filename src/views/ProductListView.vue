<template>
    <div>
      <h2>Make your order here</h2>
      <p>Start adding products to your cart.</p>
      <p>Click the product name for more details.</p>
    </div>
    <div v-if="error"> {{ error }} </div>
    <div v-if="products">
      <form class="product-list">
        <div v-for="product in products" :key="product.id">
          <router-link :to="{ name: 'ProductDetailView', params: { id: product.id } }">
          <h2>{{ product.name }}</h2>
          </router-link>
          <ProductView v-bind:product="product" v-bind:id="product.id" />
        </div>
      </form>
    </div>
    <div v-else>Loading...</div>
</template>

<script setup lang="ts">
import getProducts from '../composables/getProducts'
import ProductView from '../views/ProductView.vue'

const { products, error, load } = getProducts()
console.log("getting all products ", products)

load()
</script>

<style>
.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 100px;

}
.product-list h2 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  color: rgb(0,135,0);
}
.product-list a {
  text-decoration: none;
}
</style>