<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: { Navbar },
  name: "App",
  created() {
    if (localStorage.access_token) {
      this.$store.commit("COMMIT_LOGIN");
    }
  },
};
</script>