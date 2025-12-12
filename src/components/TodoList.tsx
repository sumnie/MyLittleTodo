import type { Todo } from '../types/todo';
import { TodoItem } from './TodoItem';
type Props = {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export function TodoList({ todoList, setTodoList }: Props) {
  const handleToggle = (id: string) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      )
    );
  };
  const handleEdit = (id: string, editText: string) => {
    setTodoList((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: editText } : todo))
    );
  };
  const handleDelete = (id: string) => {
    setTodoList((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <div className="md:py-6 py-4">
      {/* // map 쓸 때 key 필수 (안 넣으면 리렌더링시 비효율 -> key 없으면 Virtual Dom이 찾기 때문에 비효율) */}
      {todoList.map((item) => (
        <TodoItem
          item={item}
          key={item.id}
          onEdit={handleEdit}
          handleToggle={handleToggle}
          onDelete={handleDelete}
        ></TodoItem> //
      ))}
    </div>
  );
}

// { // JSX로 쓴 저 TodoItem은 사실 이렇다
//   type: TodoItem,
//   key: "1",
//   ref: null,
//   props: { item: item },
// } // key,ref는 props와 별개로 el의 메타데이터. React가 내부 비교용으로 써서 런타임에서 리액트가 key나 ref를 써버리기에 props에 key는 전달되지 않는다.
