import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Map from '../components/Map'
import Button from '../components/Button'
import Card from '../components/Card'
import { HiUserCircle } from 'react-icons/hi'

const pickup = { lat: 37.7749, lng: -122.4194 }

export default function Dashboard() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-20">
      <header className="p-4 flex items-center gap-2">
        <div className="relative group">
          <Link to="/profile" className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-gray-700">
            <HiUserCircle className="w-7 h-7" />
          </Link>
          <div className="absolute left-12 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">Profile</div>
        </div>
        <h2 className="font-bold text-xl">New Request</h2>
      </header>

      <main className="px-4 space-y-4 max-w-screen-sm mx-auto">
        <Card className="p-2" hover={false}>
          <Map
            center={pickup}
            markers={[{ position: pickup, label: 'P', type: 'pickup' }]}
          />
        </Card>

        <Button onClick={() => navigate('/user-details')} variant="secondary">
          Accept Request
        </Button>
      </main>

      <Navbar />
    </div>
  )
}

