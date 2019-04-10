import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchTodos} from '../actions'
import Todo from './Todo'


class TodoList extends React.Component{
  componentDidMount(){
    this.props.fetchTodos()
  }
  render (){
    return (
    <ul>
      hello
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
      />
    )}
  </ul>
    )
  }
}



const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
      />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default connect(null, fetchTodos)(TodoList)
