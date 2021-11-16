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
        <>
          {markers.map((o) => (
            <Marker 
              key={o.category}
              coordinates={[
                Number(o.latitude), 
                Number(o.longitude)
              ]}
            >
              <button 
                className="advanced-map__button"
                onClick={() => setSelected(o)}
              >
                <img 
                  className="advanced-map__button__img"
                  src={IconMarker} 
                />
              </button>
              
            </Marker>
          ))}

          {selected && (
            <Popup
              coordinates={[
                Number(selected.latitude), 
                Number(selected.longitude)
              ]}
              onClick={() => setSelected(null)}
            >
              <>
                <h2>{selected.category}</h2>
              </>
            </Popup>
          )}
        </>
      </MapContainer>
    </div>
  );
};

export default AdvancedMap;
