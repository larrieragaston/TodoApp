import React from 'react';
import TodoTask from './Components/TodoTask';
import todosData from './Data/todosData';
import { Spin } from 'antd';
import "antd/dist/antd.css";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: todosData,
      isLoading: true
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        todos: todosData,
        isLoading: false
      })
    }, 1500)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
          if(todo.id === id){
            todo.completed = !todo.completed;
          } 
          return todo;
        });
      return {todos: updatedTodos}
    });
  }

  render(){
    const todoTasks = this.state.todos.map(task => <TodoTask key={task.id} task={task} handleChange={this.handleChange}/>);

    return (
      <div className="App">
        {this.state.isLoading ? <Spin /> : todoTasks}
      </div>
    );
  }
}

export default App;
