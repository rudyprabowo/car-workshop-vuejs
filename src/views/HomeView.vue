<template>
  <div class="p-10">
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Services</h3>
            </div>
            <div class="table-responsive">
              <!-- <div v-for="(service, index) in services" :key="service.id">
                {{index}}. {{service.id}}.{{service.car_name}}
              </div> -->
              <!-- {{ services }} -->
                <table class="table table-hover table-nowrap">
                    <thead class="table-light">
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Car Detail</th>
                            <th scope="col">Car In Workshop</th>
                            <th scope="col">Service List</th>
                            <th scope="col">Service Status</th>
                            <th scope="col">Mechanic</th>
                            <th scope="col">Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(service,index) in services" :key="service.id">
                            <td data-label="No"> <span>{{ index }}</span> </td>
                            <td data-label="Job Title"> <img alt="..." src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" class="avatar avatar-sm rounded-circle me-2"> <span>{{ service.customer_id }}</span></td>
                            <td data-label="Email"> <span>{{service.car_name}} <br> {{service.car_plate_number}}</span> </td>
                            <td data-label="Phone"> <span>{{service.car_in_workshop}}</span> </td>
                            <td data-label="Lead Score"> <span>Servis list</span> </td>
                            <td data-label="Company"> <span class="badge bg-soft-success text-success">{{service.service_status}}</span> </td>
                            <td data-label=""> <span>{{service.mechanic_id}}</span></td>
                            <td data-label="Company"> <span class="badge bg-soft-success text-success">Update</span><span class="badge bg-soft-success text-success">Delete</span> </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { onMounted, ref } from "vue";
import { useStore } from 'vuex';

export default {
  name: "HomeView",
  setup() {
    const message = ref("You are not login.");

    const services = ref('');
    const countServices = ref('');

    const store = useStore();

    const token = "23|jEwwukEP0aS969Jc2qXfSz5POX7f9rOP8zaZ4rHL";

    onMounted(async () => {
      try{
      const response = await fetch("http://127.0.0.1:8000/api/services", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + token
        },
        credentials: 'include',
      });

      const dataServices = await response.json();

      message.value = dataServices;
      
      services.value = dataServices;

      await store.dispatch('setAuth', true);

      }catch(e){
        
        await store.dispatch('setAuth', false);

      }
    });
  

    return {
      message,
      services,
      countServices,
    }
  },
};
</script>

<style scoped>
 @import url(https://unpkg.com/@webpixels/css/dist/index.css);
</style>
