import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProfileCard from '../components/ProfileCard'
import Navbar from '../components/Navbar'
import Button from '../components/Button'

const captain = {
  name: 'Captain Alex',
  email: 'captain@medmap.com',
  id: 'CPT-10293',
  avatarUrl: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=256&q=80&auto=format&fit=crop',
}

export default function Profile() {
  const navigate = useNavigate()
  const [isEditOpen, setEditOpen] = useState(false)
  const [isModalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    if (isEditOpen) {
      const id = setTimeout(() => setModalVisible(true), 10)
      return () => clearTimeout(id)
    }
    setModalVisible(false)
  }, [isEditOpen])

  const logout = () => {
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-20">
      <header className="p-4">
        <h2 className="font-bold text-2xl">Profile</h2>
      </header>

      <main className="px-4 space-y-4 max-w-screen-sm mx-auto">
        <ProfileCard {...captain} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Button onClick={() => setEditOpen(true)} variant="primary">Edit Profile</Button>
          <Button onClick={logout} variant="danger">Logout</Button>
        </div>

        {isEditOpen && (
          <div className={`fixed inset-0 flex items-center justify-center p-4 transition-opacity duration-300 ${isModalVisible ? 'bg-black/40 opacity-100' : 'bg-black/0 opacity-0'}`}>
            <div className={`bg-white rounded-2xl shadow-xl p-4 w-full max-w-sm transform transition-all duration-300 ${isModalVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-1'}`}>
              <h3 className="text-lg font-bold mb-2">Edit Profile</h3>
              <p className="text-sm text-gray-600 mb-4">This is a placeholder modal.</p>
              <Button onClick={() => setEditOpen(false)} variant="secondary">Close</Button>
            </div>
          </div>
        )}
      </main>

      <Navbar />
    </div>
  )
}

