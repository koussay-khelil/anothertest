import axios from 'axios'
let nextTodoId = 0
export const addTodo = text =>({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})
export function Add ({data}) {
  const request = axios.get("http://localhost:3000/todos")
  console.log(request)
  return{
    type : 'ADD_TODO',
    payload : request
  }
}
export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})
export const fetchTodos = () =>{
  return function(dispatch) {
  const promise = axios.get('http://localhost:3000/todos')
  dispatch({type: 'FETCH_TODOS', payload: promise})
}
}

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
