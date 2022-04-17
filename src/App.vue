<template>
  <NavBar />
      <router-view />

</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: { NavBar },
};
</script>


<style>
/* Signin Style */
html,
body {
  height: 100%;
}

main {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
}
body {
  background-color: #f5f5f5 !important;
  /* background-color: red ; */
}

/* End Signin Style */
</style>


