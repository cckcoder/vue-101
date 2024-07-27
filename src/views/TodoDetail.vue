<script setup>
import { onBeforeMount, ref } from 'vue'
import { useTodoStore } from '@/stores/todo.js'
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()
const router = useRouter()
const todoStore = useTodoStore()
const btnClass = ref(['button', 'is-primary'])

onBeforeMount(() => {
  todoStore.fetchTodo(parseInt(route.params.id))
})

const goHomePage = () => router.push({ name: 'home' })
const goPreviousPage = () => router.go(-1)
</script>

<template>
  <div>
    <div v-if="todoStore.todoData.title">
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
                  <input class="input" type="text" v-model="todoStore.todoData.title" />
                </div>
              </div>
              <div class="field">
                <label class="label">Description</label>
                <div class="control">
                  <textarea class="textarea" v-model="todoStore.todoData.body"> </textarea>
                </div>
              </div>
              <div class="field">
                <div class="control is-flex is-align-items-center">
                  <label class="checkbox">
                    <input type="checkbox" v-model="todoStore.todoData.is_completed" />
                    <span class="ml-2">Completed</span>
                  </label>
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
