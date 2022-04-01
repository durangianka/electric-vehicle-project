import Navbar from '../components/Navbar'
import Map from '../components/Map'
import ProfileWidget from '../components/ProfileWidget'


export default function home({ chargingStations, user }) {

    return (
        <div className=" h-screen w-full flex flex-col">
            <Navbar />
            <Map chargingStations={chargingStations} />
            <ProfileWidget user={user} />
        </div>
    )
}


export async function getServerSideProps() {

    const res = await fetch('http://localhost:3000/api/getChargingStations');
    const result = await fetch('http://localhost:3000/api/getProfileInfo');
    const data = await res.json();
    const user = await result.json();

    if (data.result && user.result) return {
        props: {
            chargingStations: data.return,
            user: user.return
        }
    }

}