import { Check, CircleFadingArrowUp, Edit, Minus } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Button } from '../components/ui/Button';
import type { Todo } from '../types/todo';
type TodoItemProps = {
  item: Todo;
  handleToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, editText: string) => void;
};
export function TodoItem({
  item,
  handleToggle,
  onDelete,
  onEdit,
}: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (isEditing) inputRef.current?.focus(); // 포커스 이동
  }, [isEditing]);
  return (
    <div className="flex flex-col mb-4">
      <div className="flex items-center space-x-2 justify-between flex-wrap">
        <label className="flex items-center gap-2 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={item.status}
            onChange={() => handleToggle(item.id)}
            className="peer sr-only"
          />
          <span
            className="
    w-5 h-5 flex items-center justify-center
    rounded border-2
    transition-all duration-150
    border-gray-400
    peer-checked:bg-green-500
    peer-checked:border-green-500
    scale-100 peer-checked:scale-110
    "
          >
            <Check
              size={14}
              strokeWidth={3}
              className={`text-white ${
                item.status ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </span>
        </label>
        {/* <input type="checkbox" id={`${item.id}`} className="hidden" />
        <label htmlFor={`${item.id}`}>
          <Button
            variant={item.status ? 'secondary' : 'success'}
            onClick={() => {
              handleToggle(item.id);
            }}
          >
            {item.status ? (
              <CheckCircle size="15" strokeWidth={4}></CheckCircle>
            ) : (
              <Check size="15" strokeWidth={4}></Check>
            )}
          </Button>
        </label> */}

        {isEditing ? (
          <input
            className="w-full border-b-2 outline-none border-b-gray-300 flex-1"
            type="text"
            value={editText}
            ref={inputRef}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && editText.trim()) {
                onEdit(item.id, editText);
                setIsEditing(false);
              }
              if (e.key === 'Escape') {
                setIsEditing(false);
              }
            }}
          />
        ) : (
          <p
            className={`flex-1 border-b-2 border-transparent ${
              item.status ? 'text-gray-500 line-through' : ''
            }`}
          >
            {item.text}
          </p>
        )}
        <div>
          {isEditing ? (
            <Button
              className="w-[35px] h-[35px] rounded-full flex items-center px-0! justify-center"
              onClick={() => {
                if (editText.trim()) {
                  onEdit(item.id, editText);
                  setIsEditing(false);
                }
              }}
            >
              <CircleFadingArrowUp size="15" strokeWidth={4} />
            </Button>
          ) : (
            <Button
              className="w-[35px] h-[35px] rounded-full flex items-center px-0! justify-center"
              onClick={() => {
                setEditText(item.text); // 기존 텍스트로 초기화
                setIsEditing(true);
              }}
            >
              <Edit size="15" strokeWidth={4}></Edit>
            </Button>
          )}
          <Button
            variant="danger"
            className="ml-2 w-[35px] h-[35px] rounded-full flex items-center px-0! justify-center"
            onClick={() => onDelete(item.id)}
          >
            <Minus size="15" strokeWidth={4}></Minus>
          </Button>
        </div>
      </div>
    </div>
  );
}
