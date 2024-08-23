import React, { useRef, useState } from 'react';
import TodoItem from './TodoItem';
import { ToDoItem } from '../types/types';
import { text } from 'stream/consumers';

export default function TodoList() {
    const [todos, setTodos] = useState<ToDoItem[]>([]); // 전체 투두 목록

    // #3. 투두 추가
    const [newTodo, setNewTodo] = useState<string>(''); // 새로 추가될 투두 하나

    // #4. 포커싱
    const inputRef = useRef<HTMLInputElement>(null);
    // <HTMLInputElement> : 참조하려는 DOM 요소의 타입을 지정.
    // 즉, "input 요소를 참조하고 있다."라는 의미

    // #3. 투두 추가 함수
    const addTodo = () => {
        const updatedTodos = [
            ...todos,
            { id: Date.now(), text: newTodo, completed: false },
        ];
        setTodos(updatedTodos); // 전체 투두에 새로운 투두 추가
        setNewTodo(''); // input 초기화
    };

    //  #4. 포커싱
    // useRef로 생성한 inputRef를 사용해 입력창에 포커싱.
    const focusInput = () => {
        inputRef.current?.focus();
        // 존재하면 포커싱
    };

    // #5. 엔터키
    // key down event 입력시 투두 추가
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === 13) {
            addTodo();
        }
    };

    // #6. 토글
    // 투두 아이템 완료 상태 변경 함수
    const toggleComplete = (targetId: number) => {
        const updatedTodos = todos.map((todo) => {
            return todo.id === targetId
                ? { ...todo, completed: !todo.completed }
                : todo;
        });
        setTodos(updatedTodos);
    };

    return (
        <div>
            <h1>Todo List</h1>
            <div>
                <input
                    type="text"
                    // #3. 투두 추가
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="add new Todo!"
                    // #4. 포커싱
                    ref={inputRef} // ref 연결
                    onKeyDown={handleKeyDown}
                />
                <button onClick={addTodo}>Add</button>
                <button onClick={focusInput}>FOCUS</button>
            </div>
            <ul>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        toggleComplete={toggleComplete}
                    />
                ))}
            </ul>
        </div>
    );
}
