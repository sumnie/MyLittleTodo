import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export function Theme() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="flex align-center justify-end">
      <button onClick={toggleTheme}>
        {theme ? (
          <Sun className="cursor-pointer"></Sun>
        ) : (
          <Moon className="cursor-pointer"></Moon>
        )}
      </button>
    </div>
  );
}
