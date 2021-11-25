import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [],
      selectedTodoIndex: undefined,
    };

    this.addTodo = this.addTodo.bind(this);
    this.selectTodo = this.selectTodo.bind(this);
    this.removeSelectedTodo = this.removeSelectedTodo.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ todoList: [...state.todoList, todo] }));
  }

  selectTodo(index) {
    this.setState({ selectedTodoIndex: index });
  }

  removeSelectedTodo() {
    this.setState((state) => {
      const todoList = [...state.todoList];
      return {
        todoList: todoList.filter((_, index) => index !== state.selectedTodoIndex),
        selectedTodoIndex: undefined,
      };
    });
  }

  render() {
    const { todoList } = this.state;
    return (
      <div className="App">
        <InputTodo addTodo={ (todo) => this.addTodo(todo) } />
        {todoList && (
          <ul>
            {
              todoList.map((todo, index) => (
                <li key={ index + 1 }>
                  <Item content={ todo } handleClick={ () => this.selectTodo(index) } />
                </li>
              ))
            }
          </ul>
        )}
        <input type="button" value="Remover" onClick={ this.removeSelectedTodo } />
      </div>
    );
  }
}
export default App;
