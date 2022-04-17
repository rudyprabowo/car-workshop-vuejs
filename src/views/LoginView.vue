<template>
  <form class="form-signin text-center" @submit.prevent="submit()">
    <img
      class="mb-4"
      src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg"
      alt=""
      width="72"
      height="57"
    />
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

    <div class="form-floating">
      <input
        type="email"
        class="form-control"
        id="floatingInput"
        placeholder="name@example.com"
        v-model="data.email"
        required
      />
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input
        type="password"
        class="form-control"
        id="floatingPassword"
        placeholder="Password"
        v-model="data.password"
        required
      />
      <label for="floatingPassword">Password</label>
    </div>
    <div class="form-floating">
      <select
        class="form-select form-control"
        id="floatingAccount"
        v-model="data.account"
        required
      >
        <option selected value="customer">Customer</option>
        <option value="admin">Admin</option>
        <option value="mechanic">Mechanic</option>
      </select>
      <label for="floatingAccount">Account</label>
    </div>

    <button class="w-100 mt-5 btn btn-lg btn-primary" type="submit">
      Sign in
    </button>
  </form>
</template>

<script lang="ts">
import { reactive} from "vue";
import { useRouter } from "vue-router";
import { useStore } from 'vuex';

export default {
  name: "LoginView",
  setup() {
    const data = reactive({
      email: "",
      password: "",
      account: "",
    });

    const router = useRouter();

    const store = useStore();
    

    const submit = async () => {
      // await fetch("http://127.0.0.1:8000/api/auth/login", { //aslinya //salah karena make auth
      const response = await fetch("http://127.0.0.1:8000/api/login", { //coba //benar
      // await fetch("http://127.0.0.1:8000/api/login", { //coba //benar
        method: "POST",
        headers: { "Content-Type": "application/json","Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"},
        credentials: "include",
        // credentials: true,
        body: JSON.stringify(data),
      });

      const dataToken = await response.json();
      const token = dataToken.token;
      
      console.log('token :'+token);

      store.dispatch('setToken', token);
      

      //redirect to home
      await router.push("/");
    };

    return {
      data,
      submit,
      // token
    };
  },
};
</script>

<style scoped>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>