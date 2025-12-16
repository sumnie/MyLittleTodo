import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export function Theme() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>
      {theme === 'dark' ? (
        <Sun className="cursor-pointer"></Sun>
      ) : (
        <Moon className="cursor-pointer"></Moon>
      )}
    </button>
  );
}
