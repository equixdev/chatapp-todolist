import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import FilterTasks from './components/FilterTasks';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './App.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <div className="app">
          <h1>To do</h1>
          <AddTodoForm />
          <FilterTasks />
          <TodoList />
        </div>
      </DndProvider>
    </Provider>
  );
};

export default App;