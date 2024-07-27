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

  // Fetch all todos
  const fetchAllTodos = async () => {
    try {
      const data = await fetchTodos()
      todos.value = data
    } catch (error) {
      console.error('Failed to fetch todos:', error)
    }
  }

  // Fetch a single todo by ID
  const fetchTodo = async (id) => {
    try {
      const data = await fetchTodoById(id)
      todoData.title = data.title
      todoData.body = data.body
      todoData.is_completed = data.is_completed
      todoId.value = data.id
    } catch (error) {
      console.error('Failed to fetch todo:', error)
    }
  }

  // Create a new todo
  const submitTodoForm = async () => {
    try {
      const newTodo = await createTodo({
        title: todoData.title,
        body: todoData.body,
        is_completed: todoData.is_completed
      })
      todos.value.push(newTodo)
      resetTodoData()
    } catch (error) {
      console.error('Failed to create todo:', error)
    }
  }

  // Update an existing todo
  const submitEditTodoForm = async () => {
    try {
      const updatedTodo = await updateTodo(todoId.value, {
        title: todoData.title,
        body: todoData.body,
        is_completed: todoData.is_completed
      })
      const index = todos.value.findIndex((todo) => todo.id === todoId.value)
      if (index !== -1) {
        todos.value[index] = updatedTodo
      }

      notifyActive.value = true
      setTimeout(() => {
        notifyActive.value = false
      }, 3000)
    } catch (error) {
      console.error('Failed to update todo:', error)
    }
  }

  // Delete a todo by ID
  const deleteTodoItem = async (id) => {
    try {
      await deleteTodo(id)
      todos.value = todos.value.filter((todo) => todo.id !== id)
    } catch (error) {
      console.error('Failed to delete todo:', error)
    }
  }

  const resetTodoData = () => {
    todoData.title = ''
    todoData.body = ''
    todoData.is_completed = false
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
    fetchAllTodos,
    fetchTodo
  }
})
