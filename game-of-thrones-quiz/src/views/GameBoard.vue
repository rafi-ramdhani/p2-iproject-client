<template>
  <div class="w-9/12 flex h-full mx-auto mt-20">
    <!-- Profile -->
    <div class="w-1/4 flex flex-col h-full mr-5">
      <div
        class="bg-black bg-gray-200 bg-opacity-20 p-3 rounded-lg border-4"
        style="border-color: #2d322e"
      >
        <div class="flex items-center">
          <div class="border-2 rounded-lg">
            <img
              class="w-16 h-10 rounded-lg"
              :src="user.profilePicture"
              alt=""
            />
          </div>
          <div class="w-full h-full pl-2">
            <p class="font-semibold">{{ user.username }}</p>
          </div>
        </div>
        <div class="flex flex-col mt-3">
          <div class="flex">
            <p class="w-28 font-semibold"><i class="fas fa-coins"></i> Gold</p>
            :
            <p class="pl-2">{{ user.points }}</p>
          </div>
          <div class="flex">
            <p class="w-28 font-semibold">
              <i class="fas fa-clone"></i> Collections
            </p>
            :
            <p class="pl-2">{{ collections.length }}</p>
          </div>
        </div>
      </div>

      <!-- Menu -->
      <div
        class="
          flex flex-col
          mt-24
          items-center
          bg-gray-200 bg-opacity-20
          py-5
          rounded-lg
        "
      >
        <p
          class="text-center font-semibold mb-5"
          style="font-family: Game of Thrones"
        >
          Choose difficulty
        </p>
        <div
          class="
            w-10/12
            h-10
            text-center text-sm
            font-semibold
            flex
            items-center
            justify-center
            cursor-pointer
            my-3
            rounded-lg
            opacity-80
            hover:opacity-100
          "
          style="background-color: #b3541e; font-family: Game of Thrones"
        >
          <p>Easy</p>
        </div>
        <div
          class="
            w-10/12
            h-10
            text-center text-sm
            font-semibold
            flex
            items-center
            justify-center
            cursor-pointer
            my-3
            rounded-lg
            opacity-80
            hover:opacity-100
          "
          style="background-color: #a13333; font-family: Game of Thrones"
        >
          <p>Medium</p>
        </div>
        <div
          class="
            w-10/12
            h-10
            text-center text-sm
            font-semibold
            flex
            items-center
            justify-center
            cursor-pointer
            my-3
            rounded-lg
            opacity-80
            hover:opacity-100
          "
          style="background-color: #461111; font-family: Game of Thrones"
        >
          <p>Hard</p>
        </div>
      </div>
    </div>

    <!-- Game Section -->
    <div
      class="w-3/4 flex flex-col h-48 bg-gray-900 bg-opacity-20 p-5 rounded-xl"
      style="height: 45em"
    >
      <div class="w-full h-16 flex justify-center items-center">
        <div
          @click.prevent="toCollections"
          class="
            h-14
            w-48
            mx-3
            cursor-pointer
            rounded-lg
            flex
            justify-center
            items-center
            opacity-80
            hover:opacity-100
          "
          style="background-color: #2d322e"
        >
          <p style="font-family: Game of Thrones">COLLECTION</p>
        </div>
        <div
          @click.prevent="toStore"
          class="
            h-14
            w-48
            mx-3
            cursor-pointer
            rounded-lg
            flex
            justify-center
            items-center
            opacity-80
            hover:opacity-100
          "
          style="background-color: #2d322e"
        >
          <p style="font-family: Game of Thrones">STORE</p>
        </div>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "GameBoard",
  computed: {
    user() {
      return this.$store.state.user;
    },
    collections() {
      return this.$store.state.collections;
    },
  },
  methods: {
    toStore() {
      this.$router
        .push({
          path: "/store",
        })
        .catch(() => {});
    },
    toCollections() {
      this.$router
        .push({
          path: "/",
        })
        .catch(() => {});
    },
  },
  created() {
    if (localStorage.access_token) {
      this.$store.dispatch("getUser");
    }
  },
};
</script>

<style>
@import url(//db.onlinewebfonts.com/c/97c4b25dc74e0ab045154e75a8fdd69d?family=Game+of+Thrones);

@font-face {
  font-family: "Game of Thrones";
  src: url("//db.onlinewebfonts.com/t/97c4b25dc74e0ab045154e75a8fdd69d.eot");
  src: url("//db.onlinewebfonts.com/t/97c4b25dc74e0ab045154e75a8fdd69d.eot?#iefix")
      format("embedded-opentype"),
    url("//db.onlinewebfonts.com/t/97c4b25dc74e0ab045154e75a8fdd69d.woff2")
      format("woff2"),
    url("//db.onlinewebfonts.com/t/97c4b25dc74e0ab045154e75a8fdd69d.woff")
      format("woff"),
    url("//db.onlinewebfonts.com/t/97c4b25dc74e0ab045154e75a8fdd69d.ttf")
      format("truetype"),
    url("//db.onlinewebfonts.com/t/97c4b25dc74e0ab045154e75a8fdd69d.svg#Game of Thrones")
      format("svg");
}
</style>