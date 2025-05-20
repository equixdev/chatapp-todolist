import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { setFilter } from '../features/todos/todosSlice';
import { FilterStatus } from '../features/todos/types';

const FilterTasks: React.FC = () => {
  const filter = useSelector((state: RootState) => state.todos.filter);
  const dispatch = useDispatch();

  const handleFilterChange = (newFilter: FilterStatus) => {
    dispatch(setFilter(newFilter));
  };

  return (
    <div className="filter-tasks">
      <button
        className={filter === 'all' ? 'active' : ''}
        onClick={() => handleFilterChange('all')}
      >
        All
      </button>
      <button
        className={filter === 'active' ? 'active' : ''}
        onClick={() => handleFilterChange('active')}
      >
        Active
      </button>
      <button
        className={filter === 'completed' ? 'active' : ''}
        onClick={() => handleFilterChange('completed')}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterTasks;