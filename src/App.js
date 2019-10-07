import React from 'react';

import TodoTask from './Components/TodoTask';
import { Typography } from 'antd';

import 'antd/dist/antd.css';
import axios from 'axios';

const { Title } = Typography;
const baseURL = 'http://localhost:4000';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: []
    }
  }

  componentDidMount(){
    axios.get(baseURL)
      .then(response => {
        this.setState({ todos: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  handleChange = (task) => {
    const item = {
      _id: task._id,
      text: task.text,
      completed: !task.completed
    };

    axios.put(`${baseURL}/update/` + item._id, item)
      .then(res => {
        console.log(res.data) 
        this.setState(prevState => {
          const updatedTodos = prevState.todos.map(todo => {
              if(todo._id === task._id){
                return item;
              } 
              return todo;
            });
          return {todos: updatedTodos}
        });
      })
      .catch((error) => console.log(error));


  }

  render(){
    let todoTasks = this.state.todos.map(task => <TodoTask key={task._id} task={task} handleChange={this.handleChange}/>); 

    return (
      <div className='App'>
        <Title>Todo List</Title>
        {todoTasks}
      </div>
    );
  }
}

export default App;
