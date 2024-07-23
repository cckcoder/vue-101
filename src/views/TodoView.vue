<script setup>
import { ref, reactive } from 'vue'
import TodoList from '@/components/TodoList.vue'

const todos = ref([
  { id: 1, title: 'Drink Coffee', description: 'Awesome' },
  { id: 2, title: 'Learn Vue3', description: 'I love vue3' },
  { id: 3, title: 'Learn Django REST', description: 'Learn Django REST' }
])

const todoData = reactive({
  title: '',
  description: ''
})

const title = ref('My Todo List')

const resetTodoData = () => {
  todoData.title = ''
  todoData.description = ''
}

const deleteTodoItem = (id) => {
  todos.value = todos.value.filter((todo) => todo.id != id)
}

const submitTodoForm = () => {
  todos.value.push({ ...todoData })
  resetTodoData()
}
</script>

<template>
  <div class="container">
    <div class="columns is-mobile">
      <div class="column is-half is-offset-one-quarter">
        <h1 class="title">{{ title }}</h1>
        <form @submit.prevent="submitTodoForm">
          <div class="field">
            <label class="label">Title</label>
            <div class="control">
              <input
                v-model="todoData.title"
                class="input"
                type="text"
                placeholder="Add the title"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Description</label>
            <div class="control">
              <textarea
                v-model="todoData.description"
                class="textarea"
                placeholder="Description"
              ></textarea>
            </div>
          </div>
          <div class="control">
            <button class="button is-link">Submit</button>
          </div>
        </form>
        <hr />
        <TodoList :todos="todos" @delete-todo="deleteTodoItem" />
      </div>
    </div>
  </div>
</template>
