<script setup lang="ts">
import { ref } from 'vue'
import { IUser } from '../interfaces/userInterface';

const user = ref<IUser>({
    username: '',
    password: ''
})

function login() {
if (user.value.username == "" || user.value.password == "") {
    console.log("Username and Password can not be empty")
} else console.log("login authenticated!")
}

</script>

<template>
<div class="form-group">
  <form>
    <h2>Create login</h2><br>
    <div class="row d-flex justify-content-center">
    <div class="form-outline w-50">
    <input
        id="username"
        type="text"
        class="form-control input-sm"
        placeholder="Username"
        v-model="user.username"
        />
    <br>
    <input
        id="password"
        type="new-password"
        class="form-control input-sm"
        placeholder="Password"
        v-model="user.password"
    />
    <br>
    </div>
    </div>
    <button @click.prevent="login" type="button" class="btn btn-success">Add user</button>
    <br><br>
    <p>Username is: {{ user.username }}</p>
    <p>Password is: {{ user.password }}</p>
  </form>
  </div>
</template>

<style>
#username {
   text-align:center;
}
#password {
   text-align:center;
}
</style>