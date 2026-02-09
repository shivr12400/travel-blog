import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Box } from '@mui/material';

// --- ICON FIX ---
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// --- HELPER COMPONENT TO RE-CENTER MAP ---
// This component runs inside the map, calculates the bounding box of all markers,
// and tells the map to "fit" them all in the view.
const FitBounds = ({ markers }) => {
    const map = useMap();

    useEffect(() => {
        if (markers.length > 0) {
            // 1. Create a bounds object from all marker coordinates
            const bounds = L.latLngBounds(markers.map(m => m.coordinates));
            
            // 2. Fit the map to these bounds with some padding
            map.fitBounds(bounds, { padding: [50, 50] });
        }
    }, [markers, map]);

    return null;
};

const TripMap = ({ activities }) => {
    // Filter out valid markers
    const markers = activities.filter(a => a.coordinates && a.coordinates.length === 2);

    if (markers.length === 0) return null;

    return (
        <Box sx={{ height: 250, width: '100%', mt: 3, borderRadius: 2, overflow: 'hidden', border: '1px solid #e0e0e0' }}>
            <MapContainer 
                // We provide a fallback center/zoom, but FitBounds will override it immediately
                center={markers[0].coordinates} 
                zoom={13} 
                scrollWheelZoom={false} 
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
                {/* Render the markers */}
                {markers.map((act, idx) => (
                    <Marker key={idx} position={act.coordinates}>
                        <Popup>
                            <strong>{act.location}</strong><br />
                            {act.category}
                        </Popup>
                    </Marker>
                ))}

                {/* Calculate and apply the "Fit Bounds" logic */}
                <FitBounds markers={markers} />
            </MapContainer>
        </Box>
    );
};

export default TripMap;