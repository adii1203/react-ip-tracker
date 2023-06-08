import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'
import { useEffect } from 'react'


const Map = ({data}) => {
    const icon = new Icon({
        iconUrl: require('../assets/images/icons8-location-48.png'),
        iconSize: [38 , 38]
    })

    return (
    <div id='map' className='h-[70vh] -z-10'>
        <MapContainer
            center={[data.latitude, data.longitude]}
            zoom={13}
            attributionControl={true}
            zoomControl={false}
            doubleClickZoom={true}
            scrollWheelZoom={true}
            animate={true}
            easeLinearity={0.35}
        >
            <TileLayer
                attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={[data.latitude, data.longitude]} icon={icon}>
                <Popup>
                    <h2 className='font-Rubik font-500 capitalize'>{data.city}</h2>
                </Popup>
            </Marker>
            <RecenterAutomatically lat={data.latitude} lng={data.longitude}/>
        </MapContainer>
    </div>
    
    )
}

const RecenterAutomatically = ({lat,lng}) => {
    const map = useMap();
     useEffect(() => {
       map.setView([lat, lng]);
     }, [lat, lng,map]);
     return null;
   }




export default Map