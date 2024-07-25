import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', () => {
  const todoId = ref(0)

  const todos = ref([
    { id: 1, title: 'Drink Coffee', description: 'Awesome' },
    { id: 2, title: 'Learn Vue3', description: 'I love vue3' },
    { id: 3, title: 'Learn Django REST', description: 'Learn Django REST' }
  ])

  const todoData = reactive({
    title: '',
    description: ''
  })

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

  const reverseTodos = computed(() => {
    return todos.value.slice(0).reverse()
  })

  const getTodoById = computed(() => {
    return todos.value.find((todo) => todo.id === todoId.value)
  })

  return {
    todos,
    todoData,
    reverseTodos,
    todoId,
    getTodoById,
    deleteTodoItem,
    submitTodoForm
  }
})
