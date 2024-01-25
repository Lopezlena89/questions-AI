import { Link } from "react-router-dom"


export const RegisterPage = () => {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="w-full h-4/6 p-5 flex flex-col justify-center sm:w-7/12  lg:w-5/12 xl:w-4/12">
          <div className="flex flex-col justify-center items-center h-1/3">
              <h1 
                className="text-4xl font-semibold bg-gradient-to-r from-orange-400 via-purple-400 to-pink-400 inline-block text-transparent bg-clip-text"
              >
                Questions to AI
              </h1>
              <h3 className="mt-3 text-xl font-medium">Create an account</h3>
              
          </div>
          <div className="h-2/3 flex flex-col items-center">
            <form action="" className="w-full flex flex-col items-start">
              <span className="font-light">Name</span>
              <input type="text" className="boton-menu mt-3 p-2 w-full h-10 outline-none border border-solid border-stone-300 rounded-md "  placeholder="Enter your email"/>
              <span className="font-light">Email</span>
              <input type="text" className="boton-menu mt-3 p-2 w-full h-10 outline-none border border-solid border-stone-300 rounded-md "  placeholder="Enter your email"/>
              <span className="mt-3 font-light">Password</span>
              <input type="text" className="boton-menu mt-3 p-2 w-full h-10 outline-none border border-solid border-stone-300 rounded-md " placeholder="Enter your password"/>
              <button className="mt-3 text-white w-full h-10 bg-pink-400 rounded-md">Get started</button>
            </form>
            <div className="m-10">
              <span className="font-thin">Don’t have an account? <Link to='/auth' className="font-normal text-pink-400">Log in</Link></span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
