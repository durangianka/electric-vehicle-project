import { AiOutlineClose } from "react-icons/ai";

function MenuMobile({ setIsOpen, isOpen }) {

    return (
        <div id="menu" className="absolute w-full h-screen bg-black text-white z-10 overflow-hidden">
            <div className="absolute top-0 right-0 mt-2 mr-2  cursor-pointer">
                <AiOutlineClose size={35} onClick={() => setIsOpen(false)} />
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center space-y-4 text-white text-3xl">
                <p className="text-gray-500 hover:cursor-pointer hover:text-white">Home</p>
                <p className="text-gray-500 hover:cursor-pointer hover:text-white">Fleet</p>
                <p className="text-gray-500 hover:cursor-pointer hover:text-white">Infrastructure</p>
                <p className="text-gray-500 hover:cursor-pointer hover:text-white">Sales</p>
            </div>
        </div>
    )
}

export default MenuMobile