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
      v-for="collection in collections"
      :key="collection.id"
      :character="collection.character"
    />
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  components: { Card },
  name: "Collections",
  computed: {
    collections() {
      return this.$store.state.collections;
    },
  },
  created() {
    this.$store.dispatch("getCollections");
  },
};
</script>

<style>
</style>