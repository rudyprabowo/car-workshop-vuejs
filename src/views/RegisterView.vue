<template>
  <form class="form-register text-center" @submit.prevent="submit">
    <h1 class="h3 mb-3 fw-normal">Registration</h1>
    <h6 class="mb-3 fw-normal">Please fill form below</h6>

    <div class="form-floating mb-3">
      <input
        type="text"
        class="form-control"
        id="floatingInputFullName"
        placeholder="My Name"
        v-model="data.name"
        required
      />
      <label for="floatingInputFullName">Full Name</label>
    </div>
    <div class="form-floating mb-3">
      <input
        type="email"
        class="form-control"
        id="floatingInputEmail"
        placeholder="name@example.com"
        v-model="data.email"
        required
      />
      <label for="floatingInputEmail">Email address</label>
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
      <input
        type="password"
        class="form-control"
        id="floatingReconfirmPassword"
        placeholder="Reconfirm Password"
        v-model="data.password_confirmation"
        required
      />
      <label for="floatingPassword">Reconfirm Password</label>
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
      Subimt
    </button>
  </form>
</template>

<script lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "RegisterView",
  setup() {
    const data = reactive({
      name: "",
      email: "",
      password: "",
      account: "",
    });

    const router = useRouter();

    const submit = async () => {
      // await fetch("http://127.0.0.1:8000/api/auth/register", { //salah
      await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // headers: { "Accept": "application/json" },
        body: JSON.stringify(data),
      });

      //redirect to login
      await router.push("/login");
    };

    return {
      data,
      submit,
    };
  },
};
</script>

<style scoped>
.form-register {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-register .checkbox {
  font-weight: 400;
}

.form-register .form-floating:focus-within {
  z-index: 2;
}

.form-register input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-register input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
