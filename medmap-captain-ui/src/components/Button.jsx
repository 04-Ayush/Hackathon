export default function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
}) {
  const base = 'w-full font-bold py-3 rounded-2xl shadow-md transition-all duration-300 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2'
  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 focus:ring-blue-600',
    secondary: 'bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 focus:ring-amber-500',
    dark: 'bg-gray-900 text-white hover:bg-black focus:ring-gray-900',
    danger: 'bg-gradient-to-r from-red-500 via-amber-500 to-amber-600 text-white hover:from-red-600 hover:to-amber-700 focus:ring-red-500',
    ghost: 'bg-white text-gray-900 border border-gray-200 hover:shadow-lg',
  }
  return (
    <button type={type} onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  )
}

