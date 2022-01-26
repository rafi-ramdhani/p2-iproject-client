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
        border-t-4
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
      v-if="page === '/store'"
      class="
        h-10
        w-full
        rounded-b-lg
        bg-yellow-400
        flex
        justify-center
        items-center
      "
    >
      <p class="font-semibold">
        {{ character.price }} <i class="fas fa-coins"></i>
      </p>
    </div>
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
      "
    >
      <p class="font-semibold">Inspect <i class="fas fa-search"></i></p>
    </div>
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
};
</script>

<style>
</style>