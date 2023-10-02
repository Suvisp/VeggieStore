<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" to="/" id="brand">Veggie Store</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item active">
          <router-link class="nav-link" :to="{ name: 'UserView' }">Login</router-link>
        </li>
        <li class="nav-item active">
          <router-link class="nav-link" :to="{ name: 'ProductListView' }">Products</router-link>
        </li>
        <li class="nav-item active">
          <router-link class="nav-link" :to="{ name: 'CartView' }">Cart</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">

</script>

<style>
#brand {
  font-weight: bold;
  font-size: 35px;
  color: rgb(0,135,0);
  text-decoration: none;
}
li {
  font-weight: bold;
  font-size: 30px;
  color: #2c3e50;
  text-decoration: none;
}
</style>
