import React, { useState } from 'react';
import ReactMapboxGl, { Marker, Popup } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MAPBOX_API_KEY } from '~/config/env';
import IconMarker from '~/assets/svg/ic_marker.svg';

const MapContainer = ReactMapboxGl({ accessToken: MAPBOX_API_KEY });

interface IAdvancedMapProps {
  latitude: number,
  longitude: number,
  markers: models.Occurrence[];
}

const AdvancedMap: React.FC<IAdvancedMapProps> = ({ 
  latitude, 
  longitude, 
  markers 
}: IAdvancedMapProps) => {
  const [selected, setSelected] = useState<models.Occurrence | null>(null);

  return (
    <div className="advanced-map">
      <MapContainer
        center={[longitude, latitude]}
        style={'mapbox://styles/mapbox/streets-v9'}
        containerStyle={{ height: '100%', width: '100%' }}
      >
        {markers.map(o => (
          <Marker
            key={o.category}
            coordinates={[
              -47.2187777,
              -23.0829082
            ]}
          >
            <img 
              style={{ 
                width: '20px', 
                height: '20px' 
              }} 
              src={IconMarker} 
            />
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default AdvancedMap;

