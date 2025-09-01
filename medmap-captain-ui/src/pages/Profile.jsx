import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProfileCard from '../components/ProfileCard'
import Navbar from '../components/Navbar'

const captain = {
  name: 'Captain Alex',
  email: 'captain@medmap.com',
  id: 'CPT-10293',
  avatarUrl: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=256&q=80&auto=format&fit=crop',
}

export default function Profile() {
  const navigate = useNavigate()
  const [isEditOpen, setEditOpen] = useState(false)

  const logout = () => {
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="p-4">
        <h2 className="font-bold text-lg">Profile</h2>
      </header>

      <main className="px-4 space-y-4">
        <ProfileCard {...captain} />

        <div className="flex gap-3">
          <button
            onClick={() => setEditOpen(true)}
            className="flex-1 bg-primary hover:bg-blue-700 text-white font-bold py-3 rounded-2xl shadow-md transition-colors"
          >
            Edit Profile
          </button>
          <button
            onClick={logout}
            className="flex-1 bg-gray-900 hover:bg-black text-white font-bold py-3 rounded-2xl shadow-md transition-colors"
          >
            Logout
          </button>
        </div>

        {isEditOpen && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl p-4 w-full max-w-sm">
              <h3 className="text-lg font-bold mb-2">Edit Profile</h3>
              <p className="text-sm text-gray-600 mb-4">This is a placeholder modal.</p>
              <button
                onClick={() => setEditOpen(false)}
                className="w-full bg-secondary hover:bg-amber-600 text-white font-bold py-3 rounded-2xl shadow-md transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </main>

      <Navbar />
    </div>
  )
}

