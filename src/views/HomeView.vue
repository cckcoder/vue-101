<script setup>
import { ref } from 'vue'

const count = ref(0)
const title = ref('My Composition API')
const searchText = ref('')

const increment = (number) => {
  if (number) {
    count.value += number
  } else {
    count.value++
  }
}

const decrement = (number) => {
  if (number) {
    count.value -= number
  } else {
    count.value--
  }
}
</script>

<template>
  <main>
    <h1>{{ title }}</h1>
    <div class="counter">
      <button class="btn-counter" @click="increment(5)">++</button>
      <button class="btn-counter" @click="increment()">+</button>
      <h2>{{ count }}</h2>
      <button class="btn-counter" @click="decrement()">-</button>
      <button class="btn-counter" @click="decrement(2)">--</button>
    </div>
    <hr />
    <div>
      <label for="title-model">V-model</label>&nbsp;
      <input v-model="searchText" type="text" name="title-model" />
      <h3>{{ searchText }}</h3>
    </div>
    <div>
      <label for="title-model">V-model: Counter</label>&nbsp;
      <input v-model="count" type="text" name="title-model" />
      <h3>{{ count }}</h3>
    </div>
  </main>
</template>
