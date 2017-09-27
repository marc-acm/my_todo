import React, { Component } from 'react';
import logo from './logo.svg';
import TodoForm from './components/Todo/todoForm';
import TodoList from './components/Todo/todoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['eat', 'pray', 'love']
    }
  }

  addNewTodo(todo) {
    console.log(todo);
    this.setState({
      todos: this.state.todos.concat(todo)
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My Todo List</h1>
        <TodoForm addNewTodoFunc={this.addNewTodo.bind(this)}/>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
