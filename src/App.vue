<template>
  <div
      id="app"
      class="app__wrap"
  >
    <section class="app__input">
      <size-number />
      <time-show />
    </section>
    <section class="app__result">
      <table-to-show-number />
    </section>
  </div>
</template>

<script>

import SizeNumber from "@/components/SizeNumber/SizeNumber";
import TimeShow from "@/components/TimeShow/TimeShow";
import TableToShowNumber from "@/components/TableToShowNumber/TableToShowNumber";

export default {
  name: 'App',

  components: {
    SizeNumber,
    TimeShow,
    TableToShowNumber
  }
}
</script>

<style>
.app__wrap {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  width: 50%;
  margin: auto;
  padding: 30px;
  border: 30px solid #9400D3;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.app__input {
  width: 40%;
}

.app__result {
  width: 30%;
}

input[type=number] {
  padding: 5px;
  border-radius: 5px;
  align-self: center;
}

input[type=number]:focus-visible {
  outline: none;
}

button {
  background-color: #32CD32;
  color: white;
  border-radius: 5px;
  border: none;
  padding: 5px;
  width: 100%;
}

</style>
