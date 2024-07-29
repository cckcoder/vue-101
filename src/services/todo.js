const API_URL = 'http://localhost:8000/api/todo/'

export async function fetchTodos() {
  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      throw new Error('Network response was not ok ', response.statusText)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Function: fetchTodos has been problem:', error)
    throw error
  }
}

export async function fetchTodoById(id) {
  try {
    const response = await fetch(`${API_URL}${id}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      throw new Error('Network response was not ok ', response.statusText)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Function: fetchTodos has been problem:', error)
    throw error
  }
}

export async function createTodo(todo) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    })

    if (!response.ok) {
      throw new Error('Network response was not ok ', response.statusText)
    }

    const data = response.json()
    return data
  } catch (error) {
    console.error('Function: createTodo has been problem:', error)
    throw error
  }
}

export async function updateTodo(id, todo) {
  console.log('updateTodo: ', todo)
  try {
    const response = await fetch(`${API_URL}${id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    })

    if (!response.ok) {
      throw new Error('Network response was not ok ', response.statusText)
    }

    const data = response.json()
    return data
  } catch (error) {
    console.error('Function: updateTodo has been problem:', error)
    throw error
  }
}

export async function deleteTodo(id) {
  try {
    const response = await fetch(`${API_URL}${id}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      throw new Error('Network response was not ok ', response.statusText)
    }

    return { message: `Todo id: ${id} deleted successfully` }
  } catch (error) {
    console.error('Function: fetchTodos has been problem:', error)
    throw error
  }
}
