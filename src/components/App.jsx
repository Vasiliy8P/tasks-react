import { Component } from 'react';
// import Counter from 'components/Counter';
// import Dropdown from 'components/Dropdown';
import Todos from 'components/TodoList/TodoList';

class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Выучить основы React', completed: true },
      { id: 'id-2', text: 'Разобраться React Router', completed: false },
      { id: 'id-3', text: 'Пережить Redux', completed: false }
    ]
  }

  deleteTodo = (todoId) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => 
        todoId !== todo.id)
    }))
  }

  render() {
    const { todos } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = todos.reduce((acc, todo) => (
      todo.completed ? acc + 1 : acc
    ), 0);

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101'
        }}
      >
        <div>
          <p style={{margin: 8}}>Общее количество: { totalTodoCount }</p>
          <p style={{margin: 8}}>Количество выполненных: { completedTodoCount }</p>
        </div>

        <Todos todos={todos} onDeleteTodo={this.deleteTodo} />
      
        {/* <Counter />

      <Dropdown /> */}

      </div>
    )
  }
};  

export default App;
