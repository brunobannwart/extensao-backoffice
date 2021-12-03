import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MAPBOX_API_KEY } from '~/config/env';
import IconMarker from '~/assets/svg/ic_marker.svg';
import AdvancedAudio from '~/components/AdvancedAudio/AdvancedAudio';

interface IAdvancedMapProps {
  latitude: number,
  longitude: number,
  zoom: number,
  markers: models.Occurrence[],
  onChange: (val: models.Viewport) => void,
}

const AdvancedMap: React.FC<IAdvancedMapProps> = ({ 
  latitude, 
  longitude,
  zoom, 
  markers,
  onChange,
}: IAdvancedMapProps) => {
  const [selected, setSelected] = useState<models.Occurrence | null>(null);

  return (
    <div className="advanced-map">
      <ReactMapGL
        latitude={latitude}
        longitude={longitude}
        zoom={zoom}
        pitch={0}
        bearing={0}
        height='100%'
        width='100%'
        mapStyle={'mapbox://styles/mapbox/streets-v9'}
        mapboxApiAccessToken={MAPBOX_API_KEY}
        onViewportChange={(viewport: any) => onChange(viewport)}
      >
        {markers
          .filter(o => o.longitude && o.latitude)
          .map(o => (
            <Marker
              key={o.id}
              latitude={Number(o.latitude)}
              longitude={Number(o.longitude)}
              onClick={() => setSelected(o)}
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
            latitude={Number(selected.latitude)}
            longitude={Number(selected.longitude)}
            onClose={() => setSelected(null)}
          >
            <div className="advanced-map__marker">
              {selected.photo && (
                <div className="advanced-map__marker__photo">
                  <img 
                    src={selected.photo as string} 
                    alt={selected.category as string} 
                  />
                </div>
              )}
              <div className="advanced-map__marker__info">
                <h2>{selected.category}</h2>
                <h4>{selected.problemType}</h4>
                <h4>{selected.profileType}</h4>
                <p>{selected.description}</p>
              </div>
              {selected.audio && (
                <div className="advanced-map__marker__audio">
                  <AdvancedAudio
                    tracks={[{ source: selected.audio }]}
                  />
                </div>
              )}
            </div>
          </Popup>
        )}
      </ReactMapGL>
    </div>
  );
};

export default AdvancedMap;

