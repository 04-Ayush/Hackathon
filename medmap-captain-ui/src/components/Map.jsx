import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import { useMemo } from 'react'

const containerStyle = {
  width: '100%',
  height: '280px', // adjust height as needed
}

export default function Map({ center, markers = [] }) {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey || '',
  })

  if (!apiKey) {
    return (
      <div className="w-full h-[280px] bg-gray-200 rounded-2xl shadow flex items-center justify-center text-gray-600">
        Add VITE_GOOGLE_MAPS_API_KEY to .env
      </div>
    )
  }

  if (!isLoaded) {
    return (
      <div className="w-full h-[280px] bg-gray-100 rounded-2xl shadow animate-pulse" />
    )
  }

  const options = useMemo(() => ({
    zoomControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    clickableIcons: true,
    styles: [],
  }), [])

  const getMarkerOptions = (type) => {
    if (type === 'hospital') {
      return { 
        label: { text: 'H', color: 'white' }, 
        icon: { path: google.maps.SymbolPath.CIRCLE, fillColor: '#dc2626', fillOpacity: 1, strokeColor: 'white', strokeWeight: 2, scale: 8 } 
      }
    }
    return { 
      label: { text: 'P', color: 'white' }, 
      icon: { path: google.maps.SymbolPath.CIRCLE, fillColor: '#2563eb', fillOpacity: 1, strokeColor: 'white', strokeWeight: 2, scale: 8 } 
    }
  }

  return (
    <div className="rounded-2xl overflow-hidden shadow h-[280px]">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14} options={options}>
        {markers.map((m, idx) => (
          <Marker key={idx} position={m.position} options={getMarkerOptions(m.type)} />
        ))}
      </GoogleMap>
    </div>
  )
}
