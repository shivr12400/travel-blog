import React, { useEffect } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Box } from '@mui/material';

const FitBounds = ({ markers }) => {
  const map = useMap();

  useEffect(() => {
    if (markers.length > 0) {
      map.fitBounds(L.latLngBounds(markers.map((m) => m.coordinates)), { padding: [60, 60] });
    }
  }, [markers, map]);

  return null;
};

const TripMap = ({ activities = [] }) => {
  const markers = activities.filter((a) => a.coordinates && a.coordinates.length === 2);

  if (markers.length === 0) return null;

  return (
    <Box
      sx={{
        height: { xs: 320, md: 460 },
        width: '100%',
        borderRadius: '3px',
        overflow: 'hidden',
        border: '1px solid var(--ink-line)',
      }}
    >
      <MapContainer
        center={markers[0].coordinates}
        zoom={5}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='Tiles &copy; <a href="https://www.esri.com/">Esri</a>'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}"
        />

        {markers.map((act) => (
          <CircleMarker
            key={act.id}
            center={act.coordinates}
            radius={8}
            pathOptions={{
              color: '#F87060',
              weight: 2,
              fillColor: '#F87060',
              fillOpacity: 0.55,
            }}
          >
            <Popup>
              <strong>{act.location}</strong>
              {act.date && <div>{act.date}</div>}
            </Popup>
          </CircleMarker>
        ))}

        <FitBounds markers={markers} />
      </MapContainer>
    </Box>
  );
};

export default TripMap;
