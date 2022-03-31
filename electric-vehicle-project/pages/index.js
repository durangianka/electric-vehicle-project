import LogInForm from "../components/LogInForm"

export default function Index() {
  return (
    <div className="w-full h-screen ">
      <video className='w-full h-screen object-cover absolute' src={"electric-car.mp4"} autoPlay muted loop ></video>
      <div className='w-full h-screen absolute bg-black opacity-60'></div>
      <div className=" w-full h-full absolute">
        <LogInForm />
      </div>

    </div>
  )
}
