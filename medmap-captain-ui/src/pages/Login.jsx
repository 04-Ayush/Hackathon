import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email && password) {
      navigate('/dashboard')
    } else {
      setError('Please enter email and password')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-md p-6">
        <div className="flex flex-col items-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-md">
            <span className="font-extrabold text-lg">M</span>
          </div>
          <h1 className="mt-3 text-2xl font-bold text-gray-900">MedMap Captain</h1>
          <p className="text-sm text-gray-600">Sign in to continue</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-2xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="captain@medmap.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-2xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="••••••••"
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-3 rounded-2xl shadow-md transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

