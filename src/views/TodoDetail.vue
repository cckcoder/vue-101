<script setup>
import { onBeforeMount } from 'vue'
import { useTodoStore } from '@/stores/todo.js'
import { useRouter, useRoute } from 'vue-router'

onBeforeMount(() => {
  todoStore.todoId = parseInt(route.params.id)
})

const router = useRouter()
const route = useRoute()
const todoStore = useTodoStore()

const goHomePage = () => router.push({ name: 'home' })
const goPreviousPage = () => router.go(-1)
</script>

<template>
  <div>
    <h1>Todo Detail</h1>
    <p>Todo ID {{ $route.params.id }}</p>
    <div v-if="todoStore.getTodoById.id">
      <h2>{{ todoStore.getTodoById.title }}</h2>
      <h3>{{ todoStore.getTodoById.description }}</h3>
    </div>
    <div>
      <button @click="goHomePage" class="button is-link">Go Home</button>&nbsp;
      <button @click="goPreviousPage" class="button is-link is-light">Previous</button>
    </div>
  </div>
</template>
