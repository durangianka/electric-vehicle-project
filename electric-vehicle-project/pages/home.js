import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Map from '../components/Map'
import ProfileWidget from '../components/ProfileWidget'
import Router from 'next/router'


export default function home({ chargingStations, user, drivers }) {

    useEffect(() => {
        if (Router.query) {
            const param = Router.query
            fetch('/api/authentication', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(param)
            })
                .then(res => res.json())
                .then(res => {
                    if (!res.result) return Router.push('/')
                })
        } else {
            Router.push('/')
        }
    }, [])

    return (
        <div className=" h-screen w-full flex flex-col">
            <Navbar />
            <Map chargingStations={chargingStations} drivers={drivers} />
            <ProfileWidget user={user} />
        </div>
    )
}


export async function getServerSideProps() {

    const res = await fetch('http://localhost:3000/api/getChargingStations');
    const result = await fetch('http://localhost:3000/api/getProfileInfo');
    const request = await fetch('http://localhost:3000/api/getDriversRoute')
    const data = await res.json();
    const user = await result.json();
    const drivers = await request.json();


    if (data.result && user.result && drivers.result) return {
        props: {
            chargingStations: data.return,
            user: user.return,
            drivers: drivers.return
        }
    }

}