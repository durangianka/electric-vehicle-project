import { Marker, Source, Layer } from 'react-map-gl';

function Driver({ selectedDriver }) {


    return (
        <div id="driver">
            <Source id={`route${selectedDriver.id}`} type="geojson" data={selectedDriver.routeGeojson}>
                <Layer id={`route${selectedDriver.id}`}
                    type="line"
                    source={`route${selectedDriver.id}`}
                    layout={{
                        'line-join': 'round',
                        'line-cap': 'round'
                    }}
                    paint={{
                        'line-color': 'white',
                        'line-width': 3
                    }}
                />
            </Source>
            <Marker
                longitude={selectedDriver.routeGeojson.geometry.coordinates[selectedDriver.routeGeojson.geometry.coordinates.length - 1][0]}
                latitude={selectedDriver.routeGeojson.geometry.coordinates[selectedDriver.routeGeojson.geometry.coordinates.length - 1][1]}
            />
        </div>
    )
}

export default Driver