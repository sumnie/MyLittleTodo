import { useState } from 'react';
import { Button } from '../components/ui/Button';

type Props = {
  // todoItem: string;
  // setTodoItem: React.Dispatch<React.SetStateAction<string>>; // prev 패턴 사용가능

  onAdd: (text: string) => void; // 반환값이 없는 실행함수는 void를 써주면 리턴값을 실수로 쓰는 타입오류를 막아준다.
};

export function TodoInput({ onAdd }: Props) {
  const [todoItem, setTodoItem] = useState('');
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!todoItem.trim()) return;
        onAdd(todoItem);
        setTodoItem('');
      }}
      className="flex gap-2"
    >
      <input
        type="text"
        autoComplete="off"
        className="w-full border-2 border-gray-300 rounded-full p-3 px-4 outline-none"
        value={todoItem}
        id="writeTodo"
        onChange={(e) => setTodoItem(e.target.value)}
      ></input>

      <Button
        className="tracking-wider rounded-full"
        type="submit"
        disabled={todoItem === ''}
      >
        추가
      </Button>
    </form>
  );
}
