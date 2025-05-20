import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import TodoItem from './TodoItem';
import { useDispatch } from 'react-redux';
import { reorderTodos } from '../features/todos/todosSlice';

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const filter = useSelector((state: RootState) => state.todos.filter);
  const dispatch = useDispatch();

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return !todo.completed;
    return true;
  });

  const moveTodo = (dragIndex: number, hoverIndex: number) => {
    dispatch(reorderTodos({ startIndex: dragIndex, endIndex: hoverIndex }));
  };

  return (
    <div className="todo-list">
      {filteredTodos.map((todo: any, index: number) => (
        <TodoItem
          key={todo.id}
          index={index}
          todo={todo}
          onToggle={(id) => dispatch({ type: 'todos/toggleTodo', payload: id })}
          onDelete={(id) => dispatch({ type: 'todos/deleteTodo', payload: id })}
          onEdit={(id, newText) => dispatch({ type: 'todos/editTodo', payload: { id, newText } })}
          moveTodo={moveTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;