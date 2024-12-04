import { useState } from 'react';
import { ORS } from "@routingjs/ors"
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import { Container, Li, Menu } from './styles';
import 'leaflet/dist/leaflet.css';
import MyLocationMarker from './components/MyLocationMarker';
import MarkerItem from './components/Marker/Marker';
import data from './data/places/barna/data';
import { Drawer, Switch } from 'antd';
import { IoMenuSharp } from 'react-icons/io5';
import { getCurrentDay, getCurrentHour, timeToMinutes } from './utils';
import { getDirections } from './services/api';

function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [position, setPosition] = useState([data.origin[0], data.origin[1]]);
  const [zoom, setZoom] = useState(13);
  const [destination] = useState([40.437869, -3.819620]);
  const [showOpenPlaces, setShowOpenPlaces] = useState(true);
  const [currentUserPosition, setCurrentUserPosition] = useState(null);


  const calculateRoute = () => {
    //https://openrouteservice.org/dev/#/home
    // const ors = new ORS({ api_key: '5b3ce3597851110001cf624833b905dad4ac4eea8afb52c48b93f728' });
    console.log('2222222222222222')

    //    console.log('22222222222 origin', currentUserPosition, 'destination: ', destination)
    getDirections([41.37409163897025, 2.1443055559759583], destination).then((d) => {
      console.log('1111111111111111111', d)
      // do stuff with the directions response
      d.directions.forEach((direction) => {
        console.log(direction.feature)
      })
    })

    // ors.calculate({
    //   coordinates: [origin, destination],
    //   profile: 'driving-car', // Puedes cambiarlo a walking, cycling, etc.
    //   format: 'geojson'
    // })
    //   .then((response) => {
    //   const coordinates = response.routes[0].geometry.coordinates.map(coord => [coord[1], coord[0]]);
    //   setRoute(coordinates);
    // })
    // .catch((err) => {
    //   console.error(err);
    // });
  };
  const MapEvents = () => {
    useMapEvents({
      zoomend: (e) => {
        setZoom(e.target.getZoom());
      },
      moveend: (e) => {
        setPosition([e.target.getCenter().lat, e.target.getCenter().lng]);
      }
    });
    return null;
  };



  const openPlaces = data.targets.filter(place => {
    if (showOpenPlaces) return true;
    const currentHour = getCurrentHour();
    const currentDay = getCurrentDay();

    const placeHours = place?.hours;
    if (placeHours == null) return false;
    const placeHoursInCurrentDay = placeHours[currentDay];
    if (placeHoursInCurrentDay == null) return false;

    const currentMinutes = timeToMinutes(currentHour);

    const isOpen = placeHoursInCurrentDay.find(([start, end]) => {
      const startMinutes = timeToMinutes(start);
      const endMinutes = timeToMinutes(end);
      return currentMinutes >= startMinutes && currentMinutes < endMinutes;
    }) !== undefined;

    return isOpen;
  })


  return (
    <>
      <Menu onClick={() => setMenuVisible(true)}>
        <IoMenuSharp />
        <button onClick={calculateRoute}>Calculate Route</button>
      </Menu >
      {
        position && (
          <MapContainer center={position} zoom={zoom} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapEvents />
            {
              openPlaces.map(d => <MarkerItem key={d.coordinates} data={d} >{data.description}</MarkerItem>)
            }
            <MyLocationMarker zoom={zoom} setCurrentUserPosition={setCurrentUserPosition} baseCoordinates={data.origin} />
          </MapContainer>
        )
      }

      <Drawer
        title="Drawer with extra actions"
        placement={'right'}
        width={500}
        onClose={() => setMenuVisible(false)}
        open={menuVisible}
      >
        <Switch defaultChecked onChange={() => setShowOpenPlaces(!showOpenPlaces)} />
        <ul>
          {
            openPlaces.map(d => (<Li key={d.name}>
              <span dangerouslySetInnerHTML={{ __html: d.name }}></span>
            </Li>))
          }
        </ul>
      </Drawer>
    </>
  )
}
export default App;
