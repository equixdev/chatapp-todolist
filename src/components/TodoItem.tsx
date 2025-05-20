import React, { useState, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { Todo } from '../features/todos/types';

interface TodoItemProps {
    todo: Todo;
    index: number;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
    onEdit: (id: string, newText: string) => void;
    moveTodo: (dragIndex: number, hoverIndex: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, index, onToggle, onDelete, onEdit, moveTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);
    const ref = useRef<HTMLDivElement>(null);

    const [{ isDragging }, drag] = useDrag({
        type: 'TODO',
        item: { index },
        collect: (monitor: any) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const [, drop] = useDrop({
        accept: 'TODO',
        hover(item: { index: number }, monitor: any) {
            if (!ref.current) return;
            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) return;

            moveTodo(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });

    drag(drop(ref));

    const handleEdit = () => {
        onEdit(todo.id, editText);
        setIsEditing(false);
    };

    return (
        <div
            ref={ref}
            className={`todo-item ${isDragging ? 'dragging' : ''} ${todo.completed ? 'completed' : ''}`}
        >
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
            />
            {isEditing ? (<>
                <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onBlur={handleEdit}
                    autoFocus
                />
                <button onClick={handleEdit}>Save</button>
            </>
            ) : (
                <span>{todo.text}</span>
            )}
            {!isEditing && <button onClick={() => setIsEditing(true)}>Edit</button>}
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </div>
    );
};

export default TodoItem;