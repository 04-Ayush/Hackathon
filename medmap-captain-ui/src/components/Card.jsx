export default function Card({ children, className = '', hover = true }) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-md ${hover ? 'hover:shadow-lg hover:scale-[1.01]' : ''} transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  )
}

