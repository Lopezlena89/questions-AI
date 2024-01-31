import { IoExitOutline, IoMenu } from "react-icons/io5";
import { useAuthStore } from "../../hooks/useAuthStore";
import { MiniSidebar } from "./MiniSidebar";
import { openSideMenu } from "../../redux/closeOpenSide";
import { useDispatch } from "react-redux";

export const Navbar = () => {
    const dispatch = useDispatch();
    const {startLogout} = useAuthStore();
    
    
  return (
    <>
        <MiniSidebar/>
        <div className="flex h-[7%] items-start  w-full md:hidden   ">
            <div className="w-full h-12  bg-zinc-800 flex items-center justify-between" >
                <div className="w-32 h-full flex justify-center items-center" >
                    <IoMenu size={25} className="cursor-pointer text-pink-600 duration-300" onClick={()=>dispatch(openSideMenu())}/>
                </div>
                <div>
                    <h1 
                        className="text-base font-semibold bg-gradient-to-r from-orange-400 via-purple-400 to-pink-400 text-transparent bg-clip-text sm:text-xl"
                    >
                        Questions to AI
                    </h1>
                </div>
                <div className="w-32 h-full flex justify-center items-center">
                <IoExitOutline size={25} onClick={()=>startLogout()} className="cursor-pointer text-pink-600 duration-300"  />
                </div>
            </div>
        </div>
    </>
  )
}
