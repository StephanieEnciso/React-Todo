import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css';

const todos = [
  {
    task: 'Learn React',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Set State',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state = {
      todos: todos
    }
  }

  handleAddTask = (taskName) => {
    const todo = {
      task: taskName,
      id: this.state.todos.length,
      completed: false
    };

    const newTodos = [...this.state.todos, todo]

    this.setState({
      todos: newTodos
    });
  }

  handleTaskToggle = (taskId) => {
    this.setState({
      todos: this.state.todos.map(task => {
        if(task.id === taskId) {
          return {
            ...task,
            completed: !task.completed
          }
        }
        return(task);
      })
    });
  }

  handleCompletedTask = () => {
    const newTodos = this.state.todos.filter(task => {
      return(!task.completed)
    });

    this.setState({
      todos: newTodos
    })
  }

  render() {
    return (
      <div className = 'App'>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleAddTask = {this.handleAddTask} />
        <TodoList todos = {this.state.todos} handleCompletedTask = {this.handleCompletedTask} handleTaskToggle = {this.handleTaskToggle} />
      </div>
    );
  }
}

export default App;
