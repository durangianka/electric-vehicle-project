import Link from "next/link"
import { useState } from "react"
import MenuMobile from "./MenuMobile"
import { AiOutlineMenu } from "react-icons/ai";


function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div >
            <div className=" w-full h-24 flex-row items-center justify-evenly bg-black text-white hidden md:flex">
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

            {!isOpen && (
                <div className="absolute top-0 right-0 mt-2 mr-2 text-white z-10 cursor-pointer md:hidden">
                    <AiOutlineMenu size={35} onClick={() => setIsOpen(true)} />
                </div>
            )

            }

            {
                isOpen && (
                    <MenuMobile setIsOpen={setIsOpen} isOpen={isOpen} className="overflow-hidden" />
                )
            }

        </div>
    )
}

export default Navbar

const MenuIcon = ({ onClick }) => {
    return (
        <svg onClick={onClick} viewBox="0 0 100 80" width="40" height="40" fill="white">
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
        </svg>
    )
}