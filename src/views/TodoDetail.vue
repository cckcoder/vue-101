<script setup>
import { onBeforeMount, ref } from 'vue'
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
const btnClass = ref(['button', 'is-primary'])
</script>

<template>
  <div>
    <div v-if="todoStore.getTodoById.id">
      <div class="container">
        <div class="columns is-mobile">
          <div class="column is-half is-offset-one-quarter">
            <h1 class="is-size-2 py-4">Todo Detail</h1>
            <div v-if="todoStore.notifyActive" class="notification is-success is-light">
              Update data Success!
            </div>
            <form @submit.prevent="todoStore.submitEditTodoForm">
              <div class="field">
                <label class="label">Title</label>
                <div class="control">
                  <input class="input" type="text" v-model="todoStore.getTodoById.title" />
                </div>
              </div>
              <div class="field">
                <label class="label">Description</label>
                <div class="control">
                  <textarea class="textarea" v-model="todoStore.getTodoById.description">
                  </textarea>
                </div>
              </div>
              <button :class="btnClass">Submit Edit</button>
            </form>
          </div>
        </div>
        <hr />
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <button @click="goHomePage" class="button is-link">Go Home</button>&nbsp;
            <button @click="goPreviousPage" class="button is-link is-light">Previous</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
