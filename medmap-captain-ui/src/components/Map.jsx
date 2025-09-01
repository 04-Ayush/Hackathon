import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'

const containerStyle = {
  width: '100%',
  height: '280px',
}

export default function Map({ center, markers = [] }) {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey || '',
  })

  if (!apiKey) {
    return (
      <div className="w-full h-[280px] bg-gray-200 rounded-xl flex items-center justify-center text-gray-600">
        Add VITE_GOOGLE_MAPS_API_KEY to .env
      </div>
    )
  }

  if (!isLoaded) {
    return (
      <div className="w-full h-[280px] bg-gray-100 rounded-xl animate-pulse" />
    )
  }

  return (
    <div className="rounded-xl overflow-hidden shadow">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        {markers.map((m, idx) => (
          <Marker key={idx} position={m.position} label={m.label} />
        ))}
      </GoogleMap>
    </div>
  )
}

