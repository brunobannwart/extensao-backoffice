import React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MAPBOX_API_KEY } from '~/config/env';

const MapContainer = ReactMapboxGl({ accessToken: MAPBOX_API_KEY });

interface IAdvancedMapProps {
  latitude: number,
  longitude: number,
}

const AdvancedMap = ({ latitude, longitude }: IAdvancedMapProps) => (
  <div className="advanced-map">
    <MapContainer
      center={[longitude, latitude]}
      style={'mapbox://styles/mapbox/streets-v9'}
      containerStyle={{ height: '100%', width: '100%' }}
    />
  </div>
);

export default AdvancedMap;
