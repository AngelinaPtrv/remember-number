<template>
  <section class="time__wrap">
    <h3>Выберите время показа (сек)</h3>
    <input
        type="number"
        :min="minTime"
        :max="maxTime"
        step="0.1"
        v-model.number="timeToShow">
  </section>
</template>

<script>
export default {
  name: "TimeShow",

  data() {
    return {
      minTime: this.$store.state.timeToShow.min,
      maxTime: this.$store.state.timeToShow.max
    }
  },

  created() {
    this.$store.commit('setTimeToShow', this.minTime)
  },

  computed: {
    timeToShow: {
      get() {
        return this.$store.getters.getTimeToShow;
      },
      set(value) {
        this.$store.commit('setTimeToShow', value)
      }
    }
  }
}
</script>

<style scoped>

.time__wrap{
  display: flex;
  flex-direction: column;
}

</style>