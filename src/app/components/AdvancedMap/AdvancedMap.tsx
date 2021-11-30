import React, { useState } from 'react';
import ReactMapboxGl, { Marker, Popup } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MAPBOX_API_KEY } from '~/config/env';
import IconMarker from '~/assets/svg/ic_marker.svg';

const MapContainer = ReactMapboxGl({ accessToken: MAPBOX_API_KEY });

interface IAdvancedMapProps {
  latitude: number,
  longitude: number,
  markers: models.Occurrence[],
  onChange: (val: models.GeoPosition) => void,
}

const AdvancedMap: React.FC<IAdvancedMapProps> = ({ 
  latitude, 
  longitude, 
  markers,
  onChange,
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
          {markers
            .filter(o => o.longitude && o.latitude)
            .map(o => (
              <Marker
                key={o.id}
                coordinates={[
                  Number(o.longitude),
                  Number(o.latitude),
                ]}
                onClick={() => {
                  setSelected(o);
                  onChange({
                    latitude: Number(o.latitude),
                    longitude: Number(o.longitude),
                  });
                }}
              >
                <img 
                  style={{ 
                    width: '20px', 
                    height: '20px',
                    cursor: 'pointer', 
                  }} 
                  src={IconMarker} 
                  alt=''
                />
              </Marker>
            ))
          }

          {selected && (
            <Popup
              key={`popup-${selected.id}`}
              coordinates={[
                Number(selected.longitude),
                Number(selected.latitude),
              ]}
              onClick={() => setSelected(null)}
            >
              <div className="advanced-map__marker">
                <div className="advanced-map__marker__info">
                  <h2>{selected.category}</h2>
                  <h4>{selected.problemType}</h4>
                  <h4>{selected.profileType}</h4>
                  <p>{selected.description}</p>
                </div>
              </div>
            </Popup>
          )}
        </>
      </MapContainer>
    </div>
  );
};

export default AdvancedMap;

