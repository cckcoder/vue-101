<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goHomePage = () => router.push({ name: 'home' })
const goPreviousPage = () => router.go(-1)
</script>

<template>
  <div>
    <h1>Todo Detail</h1>
    <p>Todo ID {{ $route.params.id }}</p>
    <div>
      <button @click="goHomePage" class="button is-link">Go Home</button>&nbsp;
      <button @click="goPreviousPage" class="button is-link is-light">Previous</button>
    </div>
  </div>
</template>
