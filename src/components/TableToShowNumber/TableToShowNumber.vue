<template>
  <section class="game__wrap">
    <button @click="setRandomNumber">Старт</button>
    <div :class="visibleNumber ? 'visible_number' : 'notvisible'">
      {{ randomNumber }}
    </div>
    <section :class="visibleInput ? 'visible_input' : 'notvisible'">
      <h3>Введите увиденное число</h3>
      <input
          type="number"
          min="0"
          value="0"
          v-model.number="userNumber"
          @keyup.enter="checkNumber"
      />
    </section>
    <div :class="visibleResult ? 'visible_result' : 'notvisible'">
      {{ result ? 'Верно!' : 'Не верно. Попробуйте еще раз' }}
    </div>
  </section>
</template>

<script>
export default {
  name: "TableToShowNumber",

  data() {
    return {
      randomNumber: 0,
      result: false,
      visibleNumber: false,
      visibleInput: false,
      visibleResult: false,
      timeToShow: 0
    }
  },

  computed: {
    userNumber: {
      get() {
        return this.$store.getters.getUserNumber;
      },
      set(value) {
        this.$store.commit('setUserNumber', value);
      }
    }
  },

  methods: {
    setRandomNumber() {
      this.visibleResult = false;
      this.$store.dispatch('setRandomNumber')
        .then(() => {
          this.randomNumber = this.$store.getters.getRandomNumber;
          this.timeToShow = this.$store.getters.getTimeToShow;
          this.setVisibleNumber()
        });
    },
    setVisibleNumber() {
      this.visibleNumber = true;
      this.visibleInput = false;
      setTimeout(() => {
          this.visibleNumber = false;
          this.visibleInput = true;
    }, this.timeToShow * 1000);
    },
    async checkNumber() {
      this.visibleInput = false;
      this.visibleResult = true;
      this.result = await this.$store.dispatch('checkUserNumber')
    }
  }
}
</script>

<style scoped>

.game__wrap {
  display: flex;
  flex-direction: column;
  height: 100%;
}


.visible_number {
  align-self: center;
  display: block;
  font-size: 12vw;
  color: #00BFFF;
}

.visible_result {
  display: block;
  font-size: 25px;
  padding: 20px;
  text-align: center;
}

.visible_input {
  display: block;
}

.notvisible{
  display: none;
}

</style>