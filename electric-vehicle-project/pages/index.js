import LogInForm from "../components/LogInForm"

export default function Index() {
  return (
    <div className="w-full h-screen ">
      <video className='w-full h-screen object-cover absolute' src={"electric-car.mp4"} autoPlay muted loop ></video>
      <div className='w-full h-screen absolute bg-black opacity-60'></div>
      <div className=" w-full h-full absolute">
        <LogInForm />
      </div>

      <div className="absolute w-full h-16  bg-black text-white bottom-0">
        <div className="w-full h-full flex items-center justify-center">
          <p>&copy; Copyright {new Date().getFullYear()} <u><a href="https://www.instagram.com/giancarlo.durant/">Giancarlo Duran</a></u></p>
        </div>
      </div>
    </div>
  )
}
