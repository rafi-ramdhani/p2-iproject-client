<template>
  <div class="h-14 w-screen" style="background: #2d322e">
    <div class="h-14 w-9/12 mx-auto flex">
      <div class="h-14 w-1/2 flex items-center">
        <div @click.prevent="toHome" class="w-28 cursor-pointer object-cover">
          <img
            src="https://logos-download.com/wp-content/uploads/2016/09/Game_of_Thrones_logo_logotype_wordmark.png"
            alt=""
          />
        </div>
      </div>
      <div class="h-14 w-1/2 flex justify-end items-center">
        <div
          v-if="!loggedIn"
          @click.prevent="toSignIn"
          class="
            h-10
            w-28
            rounded-lg
            hover:bg-gray-300 hover:bg-opacity-10
            flex
            justify-center
            items-center
            cursor-pointer
          "
        >
          <p
            class="font-semibold"
            style="font-family: Game of Thrones; font-size: 15px"
          >
            Sign In
          </p>
        </div>

        <div
          v-if="!loggedIn"
          @click.prevent="toSignUp"
          class="
            h-10
            w-28
            rounded-lg
            hover:bg-gray-300 hover:bg-opacity-10
            flex
            justify-center
            items-center
            cursor-pointer
          "
        >
          <p
            class="font-semibold"
            style="font-family: Game of Thrones; font-size: 15px"
          >
            Sign Up
          </p>
        </div>
        <div
          v-if="loggedIn"
          @click.prevent="signOut"
          class="
            h-10
            w-28
            rounded-lg
            hover:bg-gray-300 hover:bg-opacity-10
            flex
            justify-center
            items-center
            cursor-pointer
          "
        >
          <p
            class="font-semibold"
            style="font-family: Game of Thrones; font-size: 15px"
          >
            Sign Out
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  computed: {
    loggedIn() {
      return this.$store.state.loggedIn;
    },
  },
  methods: {
    toHome() {
      this.$store.commit("COMMIT_QUIZ_FALSE");
      this.$store.commit("COMMIT_RESET_NUMBER");
      this.$router
        .push({
          path: "/",
        })
        .catch(() => {});
    },
    toSignIn() {
      this.$router
        .push({
          path: "/login",
        })
        .catch(() => {});
    },
    toSignUp() {
      this.$router
        .push({
          path: "/register",
        })
        .catch(() => {});
    },
    signOut() {
      this.$swal({
        position: "top-end",
        icon: "success",
        title: `Signed Out`,
        showConfirmButton: false,
        timer: 2000,
      });
      localStorage.clear();
      this.$store.commit("COMMIT_LOGOUT");
      this.$store.commit("COMMIT_EMPTY_QUIZES");
      this.$store.commit("COMMIT_EMPTY_USER");
      this.$store.commit("COMMIT_EMPTY_COLLECTIONS");
      this.$store.commit("COMMIT_QUIZ_FALSE");
      this.$store.commit("COMMIT_RESET_NUMBER");
      this.$store.commit("COMMIT_EMPTY_CHARACTERS");
      this.$router
        .push({
          path: "/login",
        })
        .catch(() => {});
    },
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