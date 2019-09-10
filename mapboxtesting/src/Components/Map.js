import React from 'react'
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

export default function Map() {
  const [state,setState] = useState({
    lng: 5,
    lat: 34,
    zoom: 1.5
  })
useEffect(() => {
const {lng, lat, zoom} = state;

const map = new mapboxgl.Map({
  container: this.mapContainer,
  style: 'mapbox://styles/mapbox/streets-v9',
  center: [lng, lat],
  zoom
});
setState({
  lng: lng.toFixed(4),
  lat: lat.toFixed(4),
  zoom: map.getZoom().toFixed(2)
})
},[])

  return (
    <div>
            <div>
        <div className="inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold">
          <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
        </div>
        <div ref={el => this.mapContainer = el} className="absolute top right left bottom" />
      </div>
    </div>
  )
}
