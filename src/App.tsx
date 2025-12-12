import { useEffect, useState } from 'react';
import { HeroSection } from './components/HeroSection.tsx';
import { TodoInput } from './components/TodoInput.tsx';
import { TodoList } from './components/TodoList.tsx';
import type { Todo } from './types/todo';

function App() {
  const [todoList, setTodoList] = useState<Todo[]>(() => {
    const saved = localStorage.getItem('todoList');
    return saved ? JSON.parse(saved) : [];
  }); //todo 타입을 요소로 갖는 배열
  // JSON.parse(saved); 문자열을 JS객체(배열)로 복원
  useEffect(() => {
    const list = JSON.stringify(todoList);
    localStorage.setItem('todoList', list);
  }, [todoList]);
  return (
    <div className="h-screen flex flex-col w-full max-w-2xl mx-auto md:py-4 md:px-3 p-3">
      <HeroSection></HeroSection>
      <TodoInput
        // todoItem={todoItem}
        // setTodoItem={setTodoItem}
        onAdd={(text) => {
          const newItem: Todo = {
            id: 'td' + Date.now(),
            text,
            status: false,
          };
          setTodoList((prev) => [newItem, ...prev]);
        }}
      />

      {/* 목록 (완료 체크박스 + 목록에서 삭제하기) */}
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}
export default App;
