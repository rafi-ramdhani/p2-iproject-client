<template>
  <div
    class="
      bg-white
      w-52
      h-96
      m-5
      rounded-lg
      flex flex-col
      justify-center
      items-center
      hover:shadow-2xl
    "
    style="background: #2d322e"
  >
    <div class="px-3 pt-3 w-full">
      <img
        class="h-56 w-full border-4 rounded-lg"
        :src="character.imageUrl"
        alt=""
      />
    </div>
    <div
      class="
        flex flex-col
        justify-between
        bg-gray-200 bg-opacity-80
        w-full
        h-24
        mx-3
        mt-3
      "
    >
      <div>
        <p class="font-semibold text-center text-lg">
          {{ character.fullName }}
        </p>
      </div>
      <div class="mb-3 text-center">
        <div>
          <p class="font-semibold text-sm">{{ character.title }}</p>
        </div>
      </div>
    </div>
    <div
      @click.prevent="buy(character.id)"
      v-if="page === '/store'"
      class="
        h-10
        w-full
        rounded-b-lg
        bg-yellow-400
        flex
        justify-center
        items-center
        cursor-pointer
        hover:bg-yellow-500
      "
    >
      <p class="font-semibold">
        {{ character.price }} <i class="fas fa-coins"></i>
      </p>
    </div>
    <a class="w-full" target="_blank" :href="character.imageUrl">
      <div
        v-if="page === '/'"
        class="
          h-10
          w-full
          rounded-b-lg
          bg-gray-200
          flex
          justify-center
          items-center
          cursor-pointer
          hover:bg-gray-300
        "
      >
        <p class="font-semibold">Inspect <i class="fas fa-search"></i></p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["character"],
  computed: {
    page() {
      return this.$route.path;
    },
  },
  methods: {
    buy(characterId) {
      this.$store.dispatch("buyCharacter", characterId);
      this.$router
        .push({
          path: "/",
        })
        .then(() => {
          this.$swal({
            position: "top-end",
            title: `"${this.character.fullName}" has been added to collections`,
            showConfirmButton: false,
            timer: 2000,
          });
        })
        .catch(() => {});
    },
  },
};
</script>

<style>
</style>