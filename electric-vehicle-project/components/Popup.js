import { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { Marker } from 'react-map-gl';

function Popup({ station }) {

    const tl = useRef();

    useEffect(() => {

        tl.current = gsap.timeline()
        const popup = document.getElementById('popup');
        tl.current
            .fromTo(popup, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" })
    }, [station])

    return (
        <Marker

            longitude={station.lon}
            latitude={station.lat}
            offSetTop={-200}
        >
            <div id='popup' className="w-60 h-32 flex flex-col items-center justify-center bg-black bg-opacity-70 rounded-xl text-white text-lg mb-48">
                <p>
                    {station.title} {station.postCode}
                </p>


                <div>
                    <div className="flex flex-row items-center pl-[2px] space-x-2">
                        <ParkIcon />
                        <p >
                            slots: {station.available}
                        </p>
                    </div>
                    <p >
                        🟢 available: {station.available}
                    </p>
                    <p >
                        ⛔ busy: {station.busy}
                    </p>
                </div>
            </div>
        </Marker >
    )
}

export default Popup

const ParkIcon = () => {
    return (
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20" viewBox="0 0 46.023 46.023" fill="white"
        >
            <g>
                <g>
                    <path d="M33.551,0H12.47C9.104,0,6.371,2.73,6.371,6.099v22c0,3.368,2.731,6.099,6.099,6.099h8.488v6.638
               c-1.841,0.594-3.368,1.988-4.114,3.78c-0.13,0.311-0.092,0.672,0.095,0.952c0.188,0.281,0.505,0.455,0.842,0.455h10.415
               c0.337,0,0.649-0.174,0.838-0.455c0.187-0.279,0.216-0.637,0.086-0.948c-0.745-1.792-2.215-3.19-4.125-3.783v-6.638h8.558
               c3.367,0,6.1-2.73,6.1-6.098V6.099C39.651,2.73,36.92,0,33.551,0z M37.102,27.18c0,2.418-1.975,4.399-4.396,4.399H13.26
               c-2.42,0-4.41-1.981-4.41-4.399V6.983c0-2.42,1.99-4.363,4.41-4.363h19.446c2.421,0,4.396,1.943,4.396,4.363V27.18z"/>
                    <path d="M32.707,4.603H13.26c-1.309,0-2.356,1.073-2.356,2.381V27.18c0,1.309,1.048,2.346,2.356,2.346h19.446
               c1.308,0,2.343-1.039,2.343-2.346V6.983C35.049,5.675,34.014,4.603,32.707,4.603z M27.764,17.394
               c-1.26,1.184-3.139,1.715-5.316,1.715c-0.483,0-0.923-0.024-1.276-0.072v5.816H17.56V8.795c1.134-0.193,2.73-0.338,4.981-0.338
               c2.275,0,3.894,0.435,4.982,1.304c1.042,0.821,1.742,2.174,1.742,3.77C29.266,15.125,28.731,16.476,27.764,17.394z"/>
                    <path d="M22.713,11.234c-0.749,0-1.259,0.073-1.542,0.145v4.808c0.354,0.072,0.719,0.096,1.252,0.096
               c1.961,0,3.17-0.991,3.17-2.657C25.594,12.128,24.551,11.234,22.713,11.234z"/>
                </g>
            </g>
        </svg>
    )
}