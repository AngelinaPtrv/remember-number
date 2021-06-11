<template>
  <section class="size__wrap">
    <h3>Выберите размер числа</h3>
    <input
        type="number"
        :min="minSize"
        :max="maxSize"
        v-model.number="size"
    />
  </section>
</template>

<script>
export default {
  name: "SizeNumber",

  data() {
    return {
      minSize: this.$store.state.sizeNumber.min,
      maxSize: this.$store.state.sizeNumber.max
    }
  },

  created() {
    this.$store.commit('setSizeNumber', this.minSize)
  },

  computed: {
    size: {
      get() {
        return this.$store.getters.getSizeNumber;
      },
      set(value) {
        this.$store.commit('setSizeNumber', value);
      }
    }
  }
}
</script>

<style scoped>

.size__wrap {
  display: flex;
  flex-direction: column;
}

</style>