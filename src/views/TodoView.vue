<script setup>
import { ref } from 'vue'

const title = ref('My Todo List')
const todos = ref([
  { id: 1, title: 'Drink Coffee', description: 'Awesome' },
  { id: 2, title: 'Learn Vue3', description: 'I love vue3' },
  { id: 3, title: 'Learn Django REST', description: 'Learn Django REST' }
])

const submitTodoForm = () => {
  console.log('form submit')
}
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <form @submit.prevent="submitTodoForm">
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Text input" />
        </div>
      </div>
      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea class="textarea" placeholder="Textarea"></textarea>
        </div>
      </div>
      <button>Submit</button>
    </form>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <p>{{ todo.title }} | {{ todo.description }}</p>
      </li>
    </ul>
  </div>
</template>
