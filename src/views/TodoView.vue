<script setup>
import { ref, onMounted } from 'vue'
import TodoList from '@/components/TodoList.vue'
import { useTodoStore } from '@/stores/todo.js'

const todoStore = useTodoStore()
const title = ref('My Todo List')

onMounted(async () => {
  await todoStore.retriveAllTodo()
})
</script>

<template>
  <div class="container">
    <div class="columns is-mobile">
      <div class="column is-half is-offset-one-quarter">
        <h1 class="title">{{ title }}</h1>
        <form @submit.prevent="todoStore.submitTodoForm">
          <div class="field">
            <label class="label">Title</label>
            <div class="control">
              <input
                v-model="todoStore.todoData.title"
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
                v-model="todoStore.todoData.description"
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
        <TodoList />
      </div>
    </div>
  </div>
</template>
