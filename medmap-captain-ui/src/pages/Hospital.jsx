import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Map from '../components/Map'
import Card from '../components/Card'
import { HiOfficeBuilding, HiLocationMarker } from 'react-icons/hi'

const pickup = { lat: 37.7749, lng: -122.4194 }
const hospital = { lat: 37.765, lng: -122.45 }

const hospitalInfo = {
  name: 'General Hospital',
  address: '1001 Potrero Ave, San Francisco, CA',
}

export default function Hospital() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-20">
      <header className="p-4 flex items-center gap-2">
        <Link to="/profile" className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-gray-700">
          <HiOfficeBuilding className="w-6 h-6" />
        </Link>
        <h2 className="font-bold text-xl">Hospital Destination</h2>
      </header>

      <main className="px-4 space-y-4 max-w-screen-sm mx-auto">
        <Card className="p-2" hover={false}>
          <Map
            center={pickup}
            markers={[
              { position: pickup, label: 'P', type: 'pickup' },
              { position: hospital, label: 'H', type: 'hospital' },
            ]}
          />
        </Card>

        <Card className="p-4 m-2">
          <h3 className="text-lg font-bold mb-3">Hospital</h3>
          <div className="space-y-2 text-gray-700">
            <div className="flex items-center gap-2">
              <HiOfficeBuilding className="w-5 h-5 text-blue-600" />
              <span className="font-semibold">Name:</span> {hospitalInfo.name}
            </div>
            <div className="flex items-center gap-2">
              <HiLocationMarker className="w-5 h-5 text-green-600" />
              <span className="font-semibold">Address:</span> {hospitalInfo.address}
            </div>
          </div>
        </Card>
      </main>

      <Navbar />
    </div>
  )
}

