import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  const isActive = (path) => location.pathname === path

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md">
      <div className="max-w-screen-sm mx-auto flex items-center justify-around py-2">
        <Link to="/dashboard" className="flex flex-col items-center text-sm">
          <div className={`w-10 h-10 flex items-center justify-center rounded-2xl ${isActive('/dashboard') ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700'} transition-colors`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M11.47 3.84a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 1-1.06 1.06l-.59-.59V19.5A2.25 2.25 0 0 1 17.25 21h-2.25a.75.75 0 0 1-.75-.75V15a.75.75 0 0 0-.75-.75h-2.5A.75.75 0 0 0 7.75 15v5.25a.75.75 0 0 1-.75.75H4.75A2.25 2.25 0 0 1 2.5 19.5v-6.5l-.59.59a.75.75 0 1 1-1.06-1.06l8.69-8.69Z" />
            </svg>
          </div>
          <span className="mt-1 font-semibold">Home</span>
        </Link>
        <Link to="/profile" className="flex flex-col items-center text-sm">
          <div className={`w-10 h-10 flex items-center justify-center rounded-2xl ${isActive('/profile') ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700'} transition-colors`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm-3 12.75a7.5 7.5 0 1 1 15 0V21a.75.75 0 0 1-.75.75h-13.5A.75.75 0 0 1 4.5 21v-2.25Z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="mt-1 font-semibold">Profile</span>
        </Link>
      </div>
    </nav>
  )
}

