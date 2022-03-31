import Link from "next/link"

function Navbar() {
    return (
        <div className=" w-full h-24 flex flex-row items-center justify-evenly bg-black text-white ">
            <div className="flex w-52 mr-32 ">
                <Link href="/home"><p className="text-3xl font-bold hover:cursor-pointer">LOGO</p></Link>
            </div>
            <div className="flex space-x-10 uppercase">
                <p className="text-gray-500 hover:cursor-pointer hover:text-white">Home</p>
                <p className="text-gray-500 hover:cursor-pointer hover:text-white">Fleet</p>
                <p className="text-gray-500 hover:cursor-pointer hover:text-white">Infrastructure</p>
                <p className="text-gray-500 hover:cursor-pointer hover:text-white">Sales</p>
            </div>
        </div>
    )
}

export default Navbar