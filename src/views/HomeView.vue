<script>
export default {
  data() {
    return {
      count: 5,
      title: 'My Counter App'
    }
  },
  methods: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  }
}
</script>

<template>
  <main>
    <h1>{{ title }}</h1>
    <div class="counter">
      <button class="btn-counter" v-on:click="count += 2">++</button>
      <button class="btn-counter" v-on:click="increment">+</button>
      <h2>{{ count }}</h2>
      <button class="btn-counter" @click="decrement">-</button>
      <button class="btn-counter" @click="count -= 2">--</button>
    </div>
  </main>
</template>
