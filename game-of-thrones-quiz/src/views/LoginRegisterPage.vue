<template>
  <div class="w-9/12 flex h-full mx-auto mt-20">
    <!-- #1 Section -->
    <div class="w-2/3 flex flex-col h-full">
      <!-- Title -->
      <div
        class="w-11/12 h-30 rounded-lg bg-gray-200 bg-opacity-20 border-4"
        style="border-color: #2d322e"
      >
        <p
          class="font-bold text-center"
          style="font-family: Game of Thrones; font-size: 50px"
        >
          Game of Thrones
        </p>
        <p
          class="text-center"
          style="font-family: Game of Thrones; font-size: 15px"
        >
          The Quiz Game
        </p>
      </div>

      <!-- Content Image -->
      <div
        class="w-11/12 rounded-lg mt-12 border-4"
        style="
          height: 35em;
          border-color: #2d322e;
          background-image: url('https://images3.alphacoders.com/710/thumbbig-710804.webp');
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          opacity: 0.3;
        "
      ></div>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "LoginRegisterPage",
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