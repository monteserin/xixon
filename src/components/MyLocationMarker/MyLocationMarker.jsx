import { useState, useEffect, useRef } from "react";
import { Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import Pin from './sort-down.png';

const MyLocationMarker = ({ zoom, setCurrentUserPosition, baseCoordinates }) => {
  const [position, setPosition] = useState(baseCoordinates);
  const [heading, setHeading] = useState(0);
  const [initialViewSet, setInitialViewSet] = useState(false);
  const positionRef = useRef(baseCoordinates);

  useEffect(() => {
    // Obtener la ubicación del dispositivo
    if (navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition(
        (pos) => {
          const newPosition = [pos.coords.latitude, pos.coords.longitude];
          const distance = getDistance(positionRef.current, newPosition);

          // Solo actualiza si la nueva posición es significativamente diferente
          if (distance > 5) { // Ajusta este valor según sea necesario
            positionRef.current = newPosition;
            setPosition(newPosition);
            setCurrentUserPosition(newPosition);
          }
        },
        (err) => console.error(err),
        { enableHighAccuracy: true }
      );

      return () => navigator.geolocation.clearWatch(watchId);
    }

    // Obtener la orientación del dispositivo
    const handleOrientation = (event) => {
      const alpha = event.alpha; // Grados en los que el dispositivo está orientado
      setHeading(alpha);
    };

    window.addEventListener('deviceorientation', handleOrientation, true);

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, [setCurrentUserPosition]);

  // Actualizar el mapa según la posición actual solo una vez
  const map = useMap();
  useEffect(() => {
    if (position && !initialViewSet) {
      map.setView(position, zoom); // Ajusta el nivel de zoom si es necesario
      setInitialViewSet(true);
    }
  }, [position, map, zoom, initialViewSet]);

  if (!position) {
    return null; // Mientras no tengamos la posición, no renderizamos nada
  }

  // Crear un icono personalizado que rota con la orientación
  const customIcon = new L.divIcon({
    className: 'custom-icon',
    html: `<div style="transform: rotate(${heading}deg);">
             <img src="${Pin}" 
                  style="width: 30px; height: 30px;" 
             />
           </div>`,
  });

  return <Marker position={position} icon={customIcon} />
};

// Función para calcular la distancia entre dos coordenadas
const getDistance = (coord1, coord2) => {
  const [lat1, lon1] = coord1;
  const [lat2, lon2] = coord2;
  const R = 6371e3; // Radio de la Tierra en metros
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Distancia en metros
};

export default MyLocationMarker;