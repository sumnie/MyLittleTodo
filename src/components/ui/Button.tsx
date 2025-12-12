type ButtonProps = {
  variant?: 'primary' | 'success' | 'danger' | 'secondary';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const base =
    'px-4 py-2 text-sm font-bold outline-none focus:ring-2 cursor-pointer inline-flex whitespace-nowrap shrink-0 items-center disabled:bg-gray-300 disabled:opacity-50 disabled:text-gray-600';
  const variants = {
    primary:
      'bg-indigo-500 text-white hover:bg-indigo-600 focus:ring-indigo-500',
    success: 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-500',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500',
  };
  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
