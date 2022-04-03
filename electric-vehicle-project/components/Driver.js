import { useEffect, useRef, useState } from 'react'
import { Marker, Source, Layer } from 'react-map-gl';
import { gsap } from "gsap";



function Driver({ selectedDriver }) {

    const tl = useRef();

    useEffect(() => {

        const driverDiv = document.getElementById('driver');
        tl.current = gsap.timeline();
        tl.current
            .fromTo(driverDiv, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" })

    }, [selectedDriver.routeGeojson.geometry.coordinates])


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