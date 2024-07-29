import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { fetchTodos, fetchTodoById, createTodo, updateTodo, deleteTodo } from '@/services/todo'

export const useTodoStore = defineStore('todo', () => {
  const todoId = ref(0)
  const notifyActive = ref(false)

  const todos = ref([])

  const todoData = reactive({
    title: '',
    body: '',
    is_completed: false
  })

  const retriveAllTodo = async () => {
    const data = await fetchTodos()
    todos.value = data
  }

  const fetchTodo = async (id) => {
    const data = await fetchTodoById(id)
    todoData.title = data.title
    todoData.body = data.body
    todoData.is_completed = data.is_completed
    todoId.value = id
  }

  const resetTodoData = () => {
    todoData.title = ''
    todoData.body = ''
    todoData.is_completed = false
  }

  const deleteTodoItem = async (id) => {
    const message = await deleteTodo(id)
    todos.value = todos.value.filter((todo) => todo.id != id)
    console.log(message)
  }

  const submitTodoForm = async () => {
    const newTodo = await createTodo({
      title: todoData.title,
      body: todoData.body,
      is_completed: todoData.is_completed
    })
    todos.value.push(newTodo)
    resetTodoData()
  }

  const submitEditTodoForm = async () => {
    const todoValue = await updateTodo(todoId.value, {
      title: todoData.title,
      body: todoData.body,
      is_completed: todoData.is_completed
    })

    const index = todos.value.findIndex((todo) => todo.id === todoId.value)
    todos.value[index] = todoValue

    notifyActive.value = true

    setInterval(() => {
      notifyActive.value = false
    }, 3000)
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
    notifyActive,
    deleteTodoItem,
    submitTodoForm,
    submitEditTodoForm,
    retriveAllTodo,
    fetchTodo,
    resetTodoData
  }
})
