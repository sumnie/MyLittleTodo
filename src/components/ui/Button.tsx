type ButtonProps = {
  variant?: 'primary' | 'success' | 'danger' | 'secondary';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const base =
    'text-sm font-bold cursor-pointer inline-flex whitespace-nowrap shrink-0 items-center disabled:bg-gray-400 disabled:text-gray-600 p-3';
  const variants = {
    primary: 'bg-indigo-500 text-white',
    success: 'bg-green-500 text-white',
    danger: 'bg-red-500 text-white',
    secondary: 'bg-gray-500 text-white',
  };
  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
