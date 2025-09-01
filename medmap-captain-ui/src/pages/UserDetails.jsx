import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Map from '../components/Map'

const pickup = { lat: 37.7749, lng: -122.4194 }
const user = {
  name: 'John Doe',
  age: 32,
  address: '123 Market St, San Francisco, CA',
}

export default function UserDetails() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="p-4 flex items-center gap-2">
        <Link to="/profile" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center shadow">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-700">
            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm-3 12.75a7.5 7.5 0 1 1 15 0V21a.75.75 0 0 1-.75.75h-13.5A.75.75 0 0 1 4.5 21v-2.25Z" clipRule="evenodd" />
          </svg>
        </Link>
        <h2 className="font-bold text-lg">User Details</h2>
      </header>

      <main className="px-4 space-y-4">
        <Map
          center={pickup}
          markers={[{ position: pickup, label: 'P' }]}
        />

        <div className="bg-white rounded-2xl shadow-md p-4">
          <h3 className="text-lg font-bold mb-2">Passenger</h3>
          <p className="text-gray-700"><span className="font-semibold">Name:</span> {user.name}</p>
          <p className="text-gray-700"><span className="font-semibold">Age:</span> {user.age}</p>
          <p className="text-gray-700"><span className="font-semibold">Address:</span> {user.address}</p>
        </div>

        <button
          onClick={() => navigate('/hospital')}
          className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-3 rounded-2xl shadow-md transition-colors"
        >
          Confirm Pickup
        </button>
      </main>

      <Navbar />
    </div>
  )
}

