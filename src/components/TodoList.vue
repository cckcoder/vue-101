<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const emit = defineEmits(['deleteTodo'])

const props = defineProps({
  todos: Array
})

const reverseTodos = computed(() => {
  return props.todos.slice(0).reverse()
})

const deleteTodoItem = (id) => {
  emit('deleteTodo', id)
}

const todoDetailById = (id) => router.push({ name: 'todo-detail', params: { id } })
</script>

<template>
  <div v-for="todo in reverseTodos" :key="todo.title" class="box">
    <div class="is-flex is-justify-content-space-between">
      <p>{{ todo.title }}</p>
      <div>
        <span @click="todoDetailById(todo.id)" class="has-text-info">Edit</span>
        &nbsp;|&nbsp;
        <span class="has-text-danger" @click="deleteTodoItem(todo.id)">X</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
