<template>
  <div class="home">
    {{ message }}
    Home
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from "vue";
import { useStore } from 'vuex';

export default {
  name: "HomeView",
  setup() {
    const message = ref("You are not login.");

    const store = useStore();

    const token = "23|jEwwukEP0aS969Jc2qXfSz5POX7f9rOP8zaZ4rHL";

    onMounted(async () => {
      try{
      const response = await fetch("http://127.0.0.1:8000/api/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + token
        },
        credentials: 'include',
      });

      const content = await response.json();

      message.value = `Hi ${content.name}`;

      await store.dispatch('setAuth', true);

      }catch(e){
        
        await store.dispatch('setAuth', false);

      }
    });
  

    return {
      message,
    }
  },
};
</script>
