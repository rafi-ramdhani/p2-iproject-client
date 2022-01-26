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
      <p class="mb-5 text-3xl" style="font-family: Game of Thrones">Sign Up</p>
      <form
        @submit.prevent="signUp"
        class="flex flex-col items-center w-full mt-5"
      >
        <input
          v-model="username"
          class="w-10/12 h-10 rounded-lg border-2 px-3 my-2"
          type="text"
          placeholder="Username (will be used for sign in)"
        />
        <input
          v-model="email"
          class="w-10/12 h-10 rounded-lg border-2 px-3 my-2"
          type="email"
          placeholder="Email"
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
          Sign Up
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
        Already have an account?
        <span
          @click.prevent="toSignIn"
          class="hover:text-blue-600 cursor-pointer font-semibold"
          >Sign In</span
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterForm",
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    toSignIn() {
      this.$router.push({
        path: "/login",
      });
    },
    signUp() {
      this.$store
        .dispatch("register", {
          username: this.username,
          email: this.email,
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
              title: "Signed Up",
              showConfirmButton: false,
              timer: 1500,
            });

            this.$router.push({
              path: "/login",
            });
          }
        })
        .catch(() => {});
    },
  },
};
</script>

<style>
</style>