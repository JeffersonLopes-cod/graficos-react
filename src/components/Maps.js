// src/components/GoogleMapComponent.jsx
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px'
};

const center = {
  lat: 51.505,
  lng: -0.09
};

const markers = [
  { position: { lat: 51.505, lng: -0.09 }, title: 'Marker 1' },
  { position: { lat: 51.515, lng: -0.1 }, title: 'Marker 2' },
  // Adicione mais marcadores conforme necessário
];

function Maps() {
  return (
    <LoadScript
      googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY" // Substitua pela sua chave de API
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
      >
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position} title={marker.title} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default Maps;
