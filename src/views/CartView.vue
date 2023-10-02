<template>
    <div class="container">
      <h2>Your order</h2>
      <p>Check total amount and continue.</p>
    </div>
    <div v-if="error"> {{ error }} </div>
    <div class="form-group" v-if="cartItems">
      <form>
        <div v-for="cartItem in cartItems" :key="cartItem.id" class="row">
          <h3 class="col">{{ cartItem.name }}</h3>
          <p class="col">EUR {{ cartItem.price }}</p>
          <p class="col">{{ cartItem.quantity }}</p>
          <p class="col">subtotal EUR {{ cartItem.sum.toFixed(2) }}</p>
        </div>
      </form>
    </div>
    <div v-else>Loading...</div>
  </template>
  
  <script setup lang="ts">
  import getCartItems from '../composables/getCartItems'
  
    const { cartItems, error, load } = getCartItems()
    console.log("getting all items in cart ")
  
    load()
  
  </script>
  
  <style>
  .row h3 {
    color: rgb(0,135,0);
  }
  </style>