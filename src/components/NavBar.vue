<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Home</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div>
        <ul class="navbar-nav me-auto mb-2 mb-md-0" v-if="!auth">
          <li class="nav-item">
            <router-link to="/login" class="nav-link active">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link active"
              >Register</router-link
            >
          </li>
        </ul>
        <ul class="navbar-nav me-auto mb-2 mb-md-0" v-if="auth">
          <li class="nav-item">
            <router-link to="/profile" class="nav-link active"
              >Profile</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link active" @click="logout">Logout</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { computed } from 'vue';
import {useStore} from "vuex";

export default {
  name:"NavBar",
  setup(){
    const store = useStore();

    const auth = computed(()=> store.state.authenticated);

    const token2 = computed(()=> store.state.token);
    const token3 = token2.value;

    // const token = "37|d2YWzPBLuW0fMHRFuTTJXbZIBuXskEl2boiNAqYk";

    const logout = async() => {
        await fetch("http://127.0.0.1:8000/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + token3
        },
        credentials: 'include',
      });

      store.dispatch('setToken', "Token Removed");

    }

    return{
      auth,
      logout
    }
  }
};
</script>

<style >
</style>