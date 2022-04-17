<template>
  <div class="container d-flex justify-content-center align-items-center">
    <div class="card">
        <div class="upper"> <img src="https://i.imgur.com/Qtrsrk5.jpg" class="img-fluid"> </div>
        <div class="user text-center">
            <div class="profile"> <img src="https://i.imgur.com/JgYD2nQ.jpg" class="rounded-circle" width="80"> </div>
        </div>
        <div class="mt-5 text-center">
            <h4 class="mb-0 mt-5">{{name}}</h4> <span class="text-muted d-block mb-2">{{email}}</span> 
            <button class="btn btn-primary btn-sm follow">{{ account}}</button>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { onMounted, ref } from "vue";
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  name: "ProfileView",
  setup() {
    const message = ref("You are not login.");

    const name = ref('');
    const email = ref('');
    const account = ref('');

    const store = useStore();

    const token2 = computed(()=> store.state.token);
    const token3 = token2.value;

    // const token = "37|d2YWzPBLuW0fMHRFuTTJXbZIBuXskEl2boiNAqYk";

    onMounted(async () => {
      try{
      const response = await fetch("http://127.0.0.1:8000/api/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + token3
        },
        credentials: 'include',
      });

      const content = await response.json();

      message.value = `Hi ${content.name}`;
      name.value = content.name;
      email.value = content.email;
      account.value = content.account;

      await store.dispatch('setAuth', true);

      }catch(e){
        
        await store.dispatch('setAuth', false);

      }
    });
  

    return {
      message,
      name,
      email,
      account
    }
  },
};
</script>

<style scoped>

body {
    background-color: #545454;
    font-family: "Poppins", sans-serif;
    font-weight: 300
}

.card {
    width: 380px;
    border: none;
    border-radius: 15px;
    padding: 8px;
    background-color: #fff;
    position: relative;
    height: 370px
}

.upper {
    height: 100px
}

.upper img {
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px
}

.user {
    position: relative
}

.profile img {
    height: 80px;
    width: 80px;
    margin-top: 2px
}

.profile {
    position: absolute;
    top: -50px;
    left: 38%;
    height: 90px;
    width: 90px;
    border: 3px solid #fff;
    border-radius: 50%
}

.follow {
    border-radius: 15px;
    padding-left: 20px;
    padding-right: 20px;
    height: 35px
}

.stats span {
    font-size: 29px
}
</style>