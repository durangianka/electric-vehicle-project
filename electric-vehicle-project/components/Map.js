import { useState, useEffect } from 'react';
import ReactMapboxGl, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Popup from './Popup'
import Driver from './Driver'


function Map({ chargingStations, drivers }) {

    const [selectedStation, setSelectedStation] = useState(null)
    const [selectedDriver, setSelectedDriver] = useState(null)
    const [isSelectedDriver, setIsSelectedDriver] = useState(null)

    const [NewPoints, setNewPoints] = useState(drivers)

    const [viewport, setViewPort] = useState({
        width: "100%",
        height: "100%",
        latitude: 51.508246,
        longitude: -0.131549,
        zoom: 12
    })

    useEffect(() => {
        setInterval(async () => {
            await NewPoints.map(async newPoint => {
                if (newPoint.routeGeojson.geometry.coordinates.length > 1) {
                    await newPoint.routeGeojson.geometry.coordinates.shift();
                }
            })
            setNewPoints(NewPoints)
        }, 1500)
    }, [NewPoints])

    return (
        <div className="flex-1">
            <ReactMapboxGl
                {...viewport}
                onMove={nextViewPort => setViewPort(nextViewPort.viewState)}
                mapStyle='mapbox://styles/giancarlo-durant/cl1f9599g00lm14qomus0c1nk'
                mapboxAccessToken={process.env.mapbox_key}
            >
                {
                    chargingStations.map(station => (
                        <div key={station.lon}>
                            <Marker
                                longitude={station.lon}
                                latitude={station.lat}
                                offsetLeft={-20}
                                offSetTop={-10}
                            >

                                <Pin className="cursor-pointer" onClick={() => setSelectedStation(station)} />

                            </Marker>
                        </div>
                    ))
                }
                {
                    selectedStation ? (

                        <Popup station={selectedStation} setSelectedStation={setSelectedStation} />

                    ) : (false)
                }

                {
                    drivers &&

                    NewPoints.map(driver => (
                        <div key={driver.id}>

                            <Marker
                                longitude={driver.routeGeojson.geometry.coordinates[0][0]}
                                latitude={driver.routeGeojson.geometry.coordinates[0][1]}
                            >
                                <div className=" w-14 h-14 cursor-pointer">
                                    <Bicycle onClick={() => { setIsSelectedDriver(!isSelectedDriver); setSelectedDriver(driver) }} />
                                </div>
                            </Marker>

                            {
                                isSelectedDriver && (
                                    <Driver selectedDriver={selectedDriver} />
                                )
                            }
                        </div>
                    )
                    )
                }

            </ReactMapboxGl >
        </div>
    )
}

const Pin = ({ className, onClick }) => {
    return (
        <svg className={className} onClick={onClick} width="30" height="45" viewBox="0 0 930 1198" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M433.5 1.10001C283.9 11.5 149.2 92.6 70 220.1C46.8 257.4 28.6 298.8 17.1 340.5C-13.4 451.2 -2.60002 568.3 47.6 670C66.7 708.7 84.8 736 115.2 772C118.6 776.1 190.5 869.6 274.8 979.7C366.6 1099.6 430.3 1181.9 433.6 1184.9C452.2 1201.9 477.8 1201.9 496.4 1184.9C499.7 1181.9 563.4 1099.6 655.2 979.7C739.5 869.6 811.4 776.1 814.8 772C845.2 736 863.3 708.7 882.4 670C939 555.3 945.3 419.8 899.8 300.5C864.5 208.2 803.1 131.6 720 76.3C637.5 21.4 533.6 -5.79999 433.5 1.10001ZM489.4 226.5C511.8 229.4 529.2 234.6 549.5 244.5C604.8 271.3 642.6 320.1 655.7 381.9C658.2 393.5 658.4 396.4 658.5 418.5C658.5 445.2 657.5 453 651.5 474C635.4 530.1 592.9 577.2 538.5 599.3C518.4 607.5 502 611.3 479.3 613.2C449.9 615.7 420 610.9 391.5 599.3C337.1 577.2 294.6 530.1 278.5 474C272.5 453 271.5 445.2 271.5 418.5C271.6 396.4 271.8 393.5 274.3 381.9C285.5 329.2 314.9 285.4 358.5 256.7C376.2 245.1 402.2 234 422.2 229.6C443.1 225 468.9 223.8 489.4 226.5Z" fill="black" />
            <path d="M448.857 307.314C448.152 307.48 447.649 307.787 447.649 308.024C447.649 308.26 446.542 309.538 445.133 310.886C443.724 312.211 435.571 320.797 427.016 329.974C418.461 339.152 401.652 357.081 389.675 369.83C368.136 392.798 362.097 399.468 362.097 400.249C362.097 400.462 362.701 400.698 363.406 400.769C364.513 400.864 387.864 400.462 402.156 400.107C405.376 400.036 407.289 400.059 406.987 400.201C406.584 400.32 407.188 400.485 408.195 400.556C410.711 400.745 419.669 402.851 421.48 403.678C422.285 404.057 423.393 404.435 423.896 404.53C424.5 404.625 420.373 409.497 414.032 416.357C408.094 422.767 396.721 435.043 388.769 443.629C380.818 452.215 372.263 461.582 369.646 464.444C367.13 467.306 364.916 469.884 364.614 470.145C363.607 471.162 365.821 471.256 385.951 471.138C402.156 471.02 404.873 471.067 406.685 471.398C413.529 472.699 416.045 473.314 419.568 474.544L423.594 475.94L419.971 480.126C415.039 485.732 396.117 507.659 391.789 512.697C389.876 514.897 384.24 521.449 379.208 527.244C374.175 533.039 367.834 540.49 365.016 543.801C362.299 547.113 357.065 553.31 353.542 557.544C349.919 561.778 347 565.421 347 565.657C347 565.941 347.705 566.036 349.214 565.988C351.127 565.941 352.737 565.231 358.877 561.778C363.003 559.507 372.565 554.185 380.214 549.951C387.864 545.717 418.662 528.427 448.656 511.515C478.649 494.602 508.441 477.832 514.782 474.26C529.98 465.698 536.22 462.008 536.22 461.487C536.22 460.896 534.912 460.849 524.646 461.038C514.279 461.227 506.026 461.275 507.636 461.109C508.34 461.038 506.428 460.47 503.61 459.832C500.691 459.169 497.068 458.129 495.558 457.466L492.84 456.284L534.107 427.119C578.191 395.991 580.405 394.359 579.801 393.886C579.399 393.673 574.266 393.602 558.464 393.602H537.529L533.603 392.916C528.571 392.065 524.344 390.906 522.129 389.77C521.224 389.274 520.116 388.942 519.613 389.061C519.211 389.155 519.11 389.013 519.412 388.753C520.418 387.925 535.113 376.595 539.24 373.497C541.353 371.865 548.298 366.543 554.74 361.67C561.081 356.797 576.983 344.616 590.067 334.587C623.08 309.372 625.093 307.74 623.684 307.362C622.074 306.912 450.769 306.865 448.857 307.314Z" fill="#61C200" />
        </svg>
    )
}

const Bicycle = ({ onClick }) => {
    return (
        <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="#009AE0">
            <g id="Cycling">
                <circle cx="9" cy="30" r="8" />
                <path d="M9,39a9,9,0,1,1,9-9A9.011,9.011,0,0,1,9,39ZM9,23a7,7,0,1,0,7,7A7.008,7.008,0,0,0,9,23Z" />
                <circle cx="39" cy="30" r="8" /><path d="M39,39a9,9,0,1,1,9-9A9.011,9.011,0,0,1,39,39Zm0-16a7,7,0,1,0,7,7A7.008,7.008,0,0,0,39,23Z" />
                <path d="M38,13H36a1,1,0,0,0,0,2h2a3,3,0,0,0,0-6H30a1,1,0,0,0-.912,1.41L31.6,16H18.8L15.912,9.59a1,1,0,0,0-1.824.82l2.859,6.354L8.178,29.431A1,1,0,0,0,9,31H24.006a1,1,0,0,0,.368-.079c.012-.005.024,0,.036-.008s.011-.009.018-.012a1.03,1.03,0,0,0,.278-.2.655.655,0,0,0,.049-.056.8.8,0,0,0,.067-.075l8.083-11.675L38.088,30.41a1,1,0,0,0,1.824-.82L31.546,11H38a1,1,0,0,1,0,2ZM17.905,18.893,22.453,29H10.909Zm6.281,9.082L19.7,18H31.091Z" />
                <path d="M19,11H12a1,1,0,0,1,0-2h7a1,1,0,0,1,0,2Z" />
            </g></svg>
    )
}

export default Map