import { Check, CheckCircle, Minus } from 'lucide-react';
import { Button } from '../components/ui/Button';
import type { Todo } from '../types/todo';
type TodoItemProps = {
  item: Todo;
  handleToggle: (id: string) => void;
  onDelete: (id: string) => void;
};
export function TodoItem({ item, handleToggle, onDelete }: TodoItemProps) {
  return (
    <div className="flex flex-col mb-4">
      <div className="flex items-center space-x-2 justify-between flex-wrap">
        <p
          className={`flex-1 ${
            item.status ? 'text-gray-500 line-through' : ''
          }`}
        >
          {item.text}
        </p>
        <input type="checkbox" id={`${item.id}`} className="hidden" />
        <div>
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
          </label>

          <Button
            variant="danger"
            className="ml-0.5"
            onClick={() => onDelete(item.id)}
          >
            <Minus size="15" strokeWidth={4}></Minus>
          </Button>
        </div>
      </div>
    </div>
  );
}
