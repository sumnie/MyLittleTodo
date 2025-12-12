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
      className="flex gap-4"
    >
      <input
        type="text"
        className="w-full border-b-2 p-3 outline-none focus:border-indigo-500"
        value={todoItem}
        id="writeTodo"
        onChange={(e) => setTodoItem(e.target.value)}
      ></input>

      <Button
        className="tracking-wider"
        type="submit"
        disabled={todoItem === ''}
      >
        추가
      </Button>
    </form>
  );
}
