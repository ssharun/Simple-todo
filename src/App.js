import React, { Component } from 'react';

import AppHeader from './components/AppHeader/AppHeader';
import SearchPanel from './components/SearchPanel/SearchPanel';
import TodoList from './components/TodoList/TodoList';

const todoData = [
  {
    label: 'Drink Coffee',
    important: false
  },
  {
    label: 'Have a lunch',
    important: false
  },
  {
    label: 'Make awesome',
    important: true
  }
]

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <SearchPanel />
        <TodoList data={todoData} />
      </div>
    );
  }
}

export default App;
