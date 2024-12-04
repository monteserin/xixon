import { useState, useRef } from 'react';
import { Marker, Polyline, Popup } from 'react-leaflet';
import { getCurrentDay } from '../../utils';
import { Day } from './Marker.styles';

const polylineOptions = {
  color: 'blue',  // Color de la línea
  weight: 4,      // Grosor de la línea
};


const MarkerItem = ({ data }) => {
  const [path, setPath] = useState();
  const markerRef = useRef(null); // Usamos useRef para obtener la referencia al marcador

  const popupOptions = data.offset && {
    offset: L.point(data.offset[0], data.offset[1]), // Ajusta este valor según sea necesario
  };

  const currentDay = getCurrentDay();
  const hasOffset = data.offset ? true : false;
  return (
    <>
      {
        path && <Polyline positions={data.path} pathOptions={polylineOptions} />
      }
      <Marker key={data.coordinates} icon={data.icon} position={data.coordinates}
        ref={markerRef} // Asignamos la referencia al marcador

        eventHandlers={{
          mouseover: () => {
            setPath(data?.path); // Detectar hover
            // markerRef.current.openPopup(); // Abre el popup al pasar el mouse

          },
          popupclose: () => {
            setPath(null); // Elimina la ruta cuando el popup se cierra
          }
        }}
      >
        <Popup {...popupOptions}>
          <div
            style={hasOffset ? {
              marginBottom: '20px', // Espacio adicional para la flecha
              position: 'relative'
            } : {}}
          >
            <div
              className="leaflet-popup-tip-container"
              style={hasOffset ? {
                position: 'absolute',
                top: 'auto',
                bottom: '10px', // Mueve la flecha a la parte superior del popup
                left: '50%',
                transform: 'translateX(-50%)',
                width: '0',
                height: '0',
                borderLeft: '10px solid transparent',
                borderRight: '10px solid transparent',
                borderTop: '10px solid white', // Ajustar el color del fondo del popup
              } : {}}
            />

            <h2><strong>{data.name}</strong></h2>
            <p>{data.description}</p>
            {
              data.address && <p style={{ fontSize: 10 }} >{data.address} </p>
            }
            {
              data.link && <a target='_blank' href={data.link}>Link</a>
            }

            {

              data.hours && (
                <>
                  <h3>Horario</h3>
                  {
                    Object.keys(data.hours).map((key) => {

                      return (
                        <div key={key}>

                          <Day today={getCurrentDay() === key}>  <strong>{key}: </strong>
                            {
                              data.hours[key] == null ?
                                <span>Cerrado</span> :
                                data.hours[key].map(([start, end], index) => (

                                  <span key={start}>
                                    {start} - {end}{index < data.hours[key].length - 1 ? ', ' : ''}
                                  </span>
                                ))
                            }
                          </Day>
                        </div>
                      )
                    })
                  }
                </>
              )
            }

          </div>
        </Popup>
      </Marker >
    </>
  )
};

export default MarkerItem;
