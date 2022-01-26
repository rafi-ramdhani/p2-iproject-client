<template>
  <div
    class="
      mt-5
      w-full
      h-full
      pt-5
      bg-black bg-opacity-20
      flex flex-wrap
      justify-center
      overflow-y-scroll
      rounded-lg
    "
  >
    <card
      v-for="character in characters"
      :key="character.id"
      :character="character"
    />
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  components: { Card },
  name: "Store",
  computed: {
    characters() {
      return this.$store.state.characters;
    },
  },
  created() {
    if (localStorage.access_token) {
      this.$store.dispatch("getCharacters");
    }
  },
};
</script>

<style>
</style>