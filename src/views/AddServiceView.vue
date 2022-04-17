<template>
  <form class="form-register text-center " @submit.prevent="submit">
<div class="card position-relative p-5">
    <h1 class="h3 mb-3 fw-normal">Add New Service</h1>
    <h6 class="mb-3 fw-normal">Please fill form below</h6>

    <div class="form-floating mb-3">
      <input
        type="text"
        class="form-control"
        id="floatingInputCarName"
        v-model="data.car_name"
        required
      />
      <label for="floatingInputCarName">Car Name</label>
    </div>
    <div class="form-floating mb-3">
      <input
        type="text"
        class="form-control"
        id="floatingInputCarPlateNumber"
        v-model="data.car_plate_number"
        required
      />
      <label for="floatingInputCarPlateNumber">Car Plate Number</label>
    </div>
    <div class="form-floating">
      <input
        type="text"
        class="form-control"
        id="floatingCarInWorkshop"
        v-model="data.car_in_workshop"
        required
      />
      <label for="floatingPassword">Car in Workshop</label>
    </div>
    <div class="form-floating">
      <input
        type="text"
        class="form-control"
        id="floatingServiceStatus"
        v-model="data.service_status"
        required
      />
      <label for="floatingPassword">Service Status</label>
    </div>
    <div class="form-floating">
      <input
        type="text"
        class="form-control"
        id="floatingCustomerId"
        v-model="data.customer_id"
        required
      />
      <label for="floatingPassword">customer_id</label>
    </div>
    <div class="form-floating">
      <input
        type="text"
        class="form-control"
        id="floatingMechanicId"
        v-model="data.mechanic_id"
        required
      />
      <label for="floatingPassword">mechanic_id</label>
    </div>

    <button class="w-100 mt-5 btn btn-lg btn-primary" type="submit">
      Subimt
    </button>
  </div>
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

    const token = "23|jEwwukEP0aS969Jc2qXfSz5POX7f9rOP8zaZ4rHL";

    const submit = async () => {
      await fetch("http://127.0.0.1:8000/api/services", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + token
        },
        credentials: 'include',

        body: JSON.stringify(data),
      });

      //redirect to login
      await router.push("/home");
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
