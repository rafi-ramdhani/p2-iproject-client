<template>
  <div class="bg-black h-full bg-opacity-20 rounded-lg">
    <!-- Quiz 1 -->
    <div v-if="number === 1" class="flex flex-col">
      <p class="m-3 text-xl font-semibold">{{ quizes[0].question }}</p>
      <div>
        <input
          v-model="one"
          class="transform scale-150 m-3"
          type="radio"
          name="one"
          :value="quizes[0].answers[0]"
          id=""
        />
        <label for="">{{ quizes[0].answers[0] }}</label>
      </div>
      <div>
        <input
          v-model="one"
          class="transform scale-150 m-3"
          type="radio"
          name="one"
          :value="quizes[0].answers[1]"
          id=""
        />
        <label for="">{{ quizes[0].answers[1] }}</label>
      </div>
      <div>
        <input
          v-model="one"
          class="transform scale-150 m-3"
          type="radio"
          name="one"
          :value="quizes[0].answers[2]"
          id=""
        />
        <label for="">{{ quizes[0].answers[2] }}</label>
      </div>
      <div>
        <input
          v-model="one"
          class="transform scale-150 m-3"
          type="radio"
          name="one"
          :value="quizes[0].answers[3]"
          id=""
        />
        <label for="">{{ quizes[0].answers[3] }}</label>
      </div>
      <div class="m-3 flex h-40 justify-end items-end">
        <div
          @click.prevent="lock"
          class="
            h-10
            w-36
            flex
            justify-center
            items-center
            rounded-lg
            cursor-pointer
            opacity-80
            hover:opacity-100
          "
          style="background: #2d322e"
        >
          <p class="text-white">Lock Answer</p>
        </div>
      </div>
    </div>

    <!-- Quiz 2 -->
    <div v-if="number === 2" class="flex flex-col">
      <p class="m-3 text-xl font-semibold">{{ quizes[1].question }}</p>
      <div>
        <input
          v-model="two"
          class="transform scale-150 m-3"
          type="radio"
          name="two"
          :value="quizes[1].answers[0]"
          id=""
        />
        <label for="">{{ quizes[1].answers[0] }}</label>
      </div>
      <div>
        <input
          v-model="two"
          class="transform scale-150 m-3"
          type="radio"
          name="two"
          :value="quizes[1].answers[1]"
          id=""
        />
        <label for="">{{ quizes[1].answers[1] }}</label>
      </div>
      <div>
        <input
          v-model="two"
          class="transform scale-150 m-3"
          type="radio"
          name="two"
          :value="quizes[1].answers[2]"
          id=""
        />
        <label for="">{{ quizes[1].answers[2] }}</label>
      </div>
      <div>
        <input
          v-model="two"
          class="transform scale-150 m-3"
          type="radio"
          name="two"
          :value="quizes[1].answers[3]"
          id=""
        />
        <label for="">{{ quizes[1].answers[3] }}</label>
      </div>
      <div class="m-3 flex h-40 justify-end items-end">
        <div
          @click.prevent="lock"
          class="
            h-10
            w-36
            flex
            justify-center
            items-center
            rounded-lg
            cursor-pointer
            opacity-80
            hover:opacity-100
          "
          style="background: #2d322e"
        >
          <p class="text-white">Lock Answer</p>
        </div>
      </div>
    </div>

    <!-- Quiz 3 -->
    <div v-if="number === 3" class="flex flex-col">
      <p class="m-3 text-xl font-semibold">{{ quizes[2].question }}</p>
      <div>
        <input
          v-model="three"
          class="transform scale-150 m-3"
          type="radio"
          name="three"
          :value="quizes[2].answers[0]"
          id=""
        />
        <label for="">{{ quizes[2].answers[0] }}</label>
      </div>
      <div>
        <input
          v-model="three"
          class="transform scale-150 m-3"
          type="radio"
          name="three"
          :value="quizes[2].answers[1]"
          id=""
        />
        <label for="">{{ quizes[2].answers[1] }}</label>
      </div>
      <div>
        <input
          v-model="three"
          class="transform scale-150 m-3"
          type="radio"
          name="three"
          :value="quizes[2].answers[2]"
          id=""
        />
        <label for="">{{ quizes[2].answers[2] }}</label>
      </div>
      <div>
        <input
          v-model="three"
          class="transform scale-150 m-3"
          type="radio"
          name="three"
          :value="quizes[2].answers[3]"
          id=""
        />
        <label for="">{{ quizes[2].answers[3] }}</label>
      </div>
      <div class="m-3 flex h-40 justify-end items-end">
        <div
          @click.prevent="lock"
          class="
            h-10
            w-36
            flex
            justify-center
            items-center
            rounded-lg
            cursor-pointer
            opacity-80
            hover:opacity-100
          "
          style="background: #2d322e"
        >
          <p class="text-white">Lock Answer</p>
        </div>
      </div>
    </div>

    <!-- Quiz 4 -->
    <div v-if="number === 4" class="flex flex-col">
      <p class="m-3 text-xl font-semibold">{{ quizes[3].question }}</p>
      <div>
        <input
          v-model="four"
          class="transform scale-150 m-3"
          type="radio"
          name="four"
          :value="quizes[3].answers[0]"
          id=""
        />
        <label for="">{{ quizes[3].answers[0] }}</label>
      </div>
      <div>
        <input
          v-model="four"
          class="transform scale-150 m-3"
          type="radio"
          name="four"
          :value="quizes[3].answers[1]"
          id=""
        />
        <label for="">{{ quizes[3].answers[1] }}</label>
      </div>
      <div>
        <input
          v-model="four"
          class="transform scale-150 m-3"
          type="radio"
          name="four"
          :value="quizes[3].answers[2]"
          id=""
        />
        <label for="">{{ quizes[3].answers[2] }}</label>
      </div>
      <div>
        <input
          v-model="four"
          class="transform scale-150 m-3"
          type="radio"
          name="four"
          :value="quizes[3].answers[3]"
          id=""
        />
        <label for="">{{ quizes[3].answers[3] }}</label>
      </div>
      <div class="m-3 flex h-40 justify-end items-end">
        <div
          @click.prevent="lock"
          class="
            h-10
            w-36
            flex
            justify-center
            items-center
            rounded-lg
            cursor-pointer
            opacity-80
            hover:opacity-100
          "
          style="background: #2d322e"
        >
          <p class="text-white">Lock Answer</p>
        </div>
      </div>
    </div>

    <!-- Quiz 5 -->
    <div v-if="number === 5" class="flex flex-col">
      <p class="m-3 text-xl font-semibold">{{ quizes[4].question }}</p>
      <div>
        <input
          v-model="five"
          class="transform scale-150 m-3"
          type="radio"
          name="five"
          :value="quizes[4].answers[0]"
          id=""
        />
        <label for="">{{ quizes[4].answers[0] }}</label>
      </div>
      <div>
        <input
          v-model="five"
          class="transform scale-150 m-3"
          type="radio"
          name="five"
          :value="quizes[4].answers[1]"
          id=""
        />
        <label for="">{{ quizes[4].answers[1] }}</label>
      </div>
      <div>
        <input
          v-model="five"
          class="transform scale-150 m-3"
          type="radio"
          name="five"
          :value="quizes[4].answers[2]"
          id=""
        />
        <label for="">{{ quizes[4].answers[2] }}</label>
      </div>
      <div>
        <input
          v-model="five"
          class="transform scale-150 m-3"
          type="radio"
          name="five"
          :value="quizes[4].answers[3]"
          id=""
        />
        <label for="">{{ quizes[4].answers[3] }}</label>
      </div>
      <div class="m-3 flex h-40 justify-end items-end">
        <div
          @click.prevent="finish"
          class="
            h-10
            w-36
            flex
            justify-center
            items-center
            rounded-lg
            cursor-pointer
            opacity-80
            hover:opacity-100
          "
          style="background: #2d322e"
        >
          <p class="text-white">Finish</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Quizes",
  data() {
    return {
      one: null,
      two: null,
      three: null,
      four: null,
      five: null,
      score: 0,
    };
  },
  computed: {
    quizes() {
      return this.$store.state.quizes;
    },
    number() {
      return this.$store.state.number;
    },
  },
  methods: {
    lock() {
      this.$store.commit("COMMIT_NUMBER");
    },
    finish() {
      this.score = 0;

      if (this.one === this.quizes[0].correctAnswer) {
        this.score++;
      }

      if (this.two === this.quizes[1].correctAnswer) {
        this.score++;
      }

      if (this.three === this.quizes[2].correctAnswer) {
        this.score++;
      }

      if (this.four === this.quizes[3].correctAnswer) {
        this.score++;
      }

      if (this.five === this.quizes[4].correctAnswer) {
        this.score++;
      }

      if (this.quizes[0].difficulty === "easy") {
        this.score *= 1;
      }

      if (this.quizes[0].difficulty === "medium") {
        this.score *= 2;
      }

      if (this.quizes[0].difficulty === "hard") {
        this.score *= 3;
      }

      this.$store.dispatch("earnPoints", this.score).then(() => {
        this.score = 0;
        this.one = null;
        this.two = null;
        this.three = null;
        this.four = null;
        this.five = null;
        this.$store.commit("COMMIT_RESET_NUMBER");
        this.$store.commit("COMMIT_QUIZ_FALSE");
      });
    },
  },
};
</script>

<style>
</style>