<script setup>
import { useRouter } from 'vue-router'
import { useTodoStore } from '@/stores/todo.js'

const todoStore = useTodoStore()

const router = useRouter()
const todoDetailById = (id) => router.push({ name: 'todo-detail', params: { id } })
</script>

<template>
  <div v-for="todo in todoStore.reverseTodos" :key="todo.title" class="box">
    <div class="is-flex is-justify-content-space-between">
      <p>{{ todo.title }}</p>
      <div>
        <span @click="todoDetailById(todo.id)" class="has-text-info">Edit</span>
        &nbsp;|&nbsp;
        <span class="has-text-danger" @click="todoStore.deleteTodoItem(todo.id)">X</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
