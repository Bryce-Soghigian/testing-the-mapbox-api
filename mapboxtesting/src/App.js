import React, {Component} from 'react'
import Geocoder from 'react-mapbox-gl-geocoder'
import ReactMapGL from 'react-map-gl'


const mapAccess = {
    mapboxApiAccessToken: 'pk.eyJ1IjoiYnNvZ2hpZ2lhbiIsImEiOiJjazBhOTUxam4wMDNtM2RvNXJzbjQ5aGV6In0.eL8NJ0-ikx_5Dl49994bGw'
}

const mapStyle = {
    width: '100%',
    height: 600,
    style: 'mapbox://styles/bsoghigian/ck0eubu3v0wzj1cp3eu3khs2e'
}

const queryParams = {
    country: 'us'
}

export default class App extends Component {
    state = {
        viewport: {}
    }

    onSelected = (viewport, item) => {
        this.setState({viewport});
        console.log('Selected: ', item)
    }

    render() {
        const {viewport} = this.state

        return (
            <div>
                <Geocoder
                    {...mapAccess} onSelected={this.onSelected} viewport={viewport} hideOnSelect={true}
                    queryParams={queryParams}
                />

                <ReactMapGL
                    {...mapAccess} {...viewport} {...mapStyle}
                    onViewportChange={(newViewport) => this.setState({viewport: newViewport})}
                />
            </div>
        )
    }
}