<template>
  <!-- #2 Section / Sign In Form -->
  <div
    class="
      w-1/3
      bg-gray-200 bg-opacity-20
      border-4
      flex
      rounded-lg
      justify-center
      items-center
    "
    style="height: 44.7em; border-color: #2d322e"
  >
    <div class="w-full flex flex-col items-center mt-20" style="height: 30em">
      <p class="mb-5 text-3xl" style="font-family: Game of Thrones">Sign In</p>
      <form
        @submit.prevent="signIn"
        class="flex flex-col items-center w-full mt-5"
      >
        <input
          v-model="username"
          class="w-10/12 h-10 rounded-lg border-2 px-3 my-2"
          type="text"
          placeholder="Username"
        />
        <input
          v-model="password"
          class="w-10/12 h-10 rounded-lg border-2 px-3"
          type="password"
          placeholder="Password"
        />
        <button
          class="
            w-10/12
            h-12
            mt-5
            mb-3
            rounded-lg
            opacity-90
            hover:opacity-100
            font-semibold
          "
          style="background-color: #a13333"
          type="submit"
        >
          Sign In
        </button>
      </form>
      <button
        class="
          w-10/12
          h-12
          mt-1
          mb-5
          rounded-lg
          opacity-90
          hover:opacity-100
          font-semibold
        "
        style="background-color: #a13333"
      >
        Facebook Sign In
      </button>
      <p>
        Don't have an account?
        <span
          @click.prevent="toSignUp"
          class="hover:text-blue-600 cursor-pointer font-semibold"
          >Sign Up</span
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    toSignUp() {
      this.$router
        .push({
          path: "/register",
        })
        .catch(() => {});
    },
    signIn() {
      this.$store
        .dispatch("login", {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          if (res) {
            this.$swal({
              position: "top-end",
              icon: "error",
              title: res,
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            this.$swal({
              position: "top-end",
              icon: "success",
              title: "Signed In",
              showConfirmButton: false,
              timer: 1500,
            });

            this.$router
              .push({
                path: "/",
              })
              .catch(() => {});
          }
        });
    },
  },
};
</script>

<style>
</style>