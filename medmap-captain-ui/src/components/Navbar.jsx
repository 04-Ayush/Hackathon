import { Link, useLocation } from 'react-router-dom'
import { HiHome, HiUser } from 'react-icons/hi'

export default function Navbar() {
  const location = useLocation()
  const isActive = (path) => location.pathname === path

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur border-t border-gray-200 shadow-md">
      <div className="max-w-screen-sm mx-auto flex items-center justify-around py-2">
        <Link to="/dashboard" className="flex flex-col items-center text-sm group">
          <div className={`w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300 ${isActive('/dashboard') ? 'bg-primary text-white shadow-lg scale-105' : 'bg-gray-100 text-gray-700 group-hover:shadow-lg group-hover:scale-105'}`}>
            <HiHome className="w-6 h-6" />
          </div>
          <span className={`mt-1 font-semibold transition-colors ${isActive('/dashboard') ? 'text-primary' : 'text-gray-700 group-hover:text-gray-900'}`}>Home</span>
        </Link>
        <Link to="/profile" className="flex flex-col items-center text-sm group relative">
          <div className={`w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300 ${isActive('/profile') ? 'bg-primary text-white shadow-lg scale-105' : 'bg-gray-100 text-gray-700 group-hover:shadow-lg group-hover:scale-105'}`}>
            <HiUser className="w-6 h-6" />
          </div>
          <span className={`mt-1 font-semibold transition-colors ${isActive('/profile') ? 'text-primary' : 'text-gray-700 group-hover:text-gray-900'}`}>Profile</span>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full shadow">1</span>
        </Link>
      </div>
    </nav>
  )
}

