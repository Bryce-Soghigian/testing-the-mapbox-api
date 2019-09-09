// import React, {Component} from 'react';
// import MapGL, {NavigationControl} from 'react-map-gl';
// const TOKEN = 'pk.eyJ1IjoiYnNvZ2hpZ2lhbiIsImEiOiJjazBhOTUxam4wMDNtM2RvNXJzbjQ5aGV6In0.eL8NJ0-ikx_5Dl49994bGw';
// const navStyle = {
//     style:'https://studio.mapbox.com/styles/bsoghigian/ck0b0bhas2sz01cqss7od8nb1/edit/#1.97/35.24/-81.83'
// //   position: 'absolute',
// //   top: 0,
// //   left: 0,
// //   padding: '10px'
// };
// export default class Map extends Component {
// constructor(props) {
//     super(props);
//     this.state = {
//       viewport: {
//         latitude: 37.785164,
//         longitude: -100,
//         zoom: 2.8,
//         bearing: 0,
//         pitch: 0,
//         width: 1000,
//         height: 1000,
//       }
//     };
//   }
// render() {
//     const {viewport} = this.state;
// return (
//       <MapGL
//         {...viewport}
//         mapStyle="mapbox://styles/mapbox/dark-v9"
//         mapboxApiAccessToken={TOKEN}>
//         <div className="nav" style={navStyle}>
//           <NavigationControl/>
//         </div>
//       </MapGL>
//     );
//   }
// }
mapboxgl.accessToken = 'pk.eyJ1IjoiYnNvZ2hpZ2lhbiIsImEiOiJjazBhOTUxam4wMDNtM2RvNXJzbjQ5aGV6In0.eL8NJ0-ikx_5Dl49994bGw';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
zoom: 13,
center: [4.899, 52.372]
});
 
var layerList = document.getElementById('menu');
var inputs = layerList.getElementsByTagName('input');
 
function switchLayer(layer) {
var layerId = layer.target.id;
map.setStyle('mapbox://styles/mapbox/' + layerId);
}
 
for (var i = 0; i < inputs.length; i++) {
inputs[i].onclick = switchLayer;
}