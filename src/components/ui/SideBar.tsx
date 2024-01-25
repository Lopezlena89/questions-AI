import { FaUser } from "react-icons/fa";
import { IoMdChatbubbles } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import type { RootState } from '../../redux/store'
import { useDispatch, useSelector } from "react-redux";
import {  changeToogleMenu} from '../../redux/menuSlice';




export const SideBar = () => {

    const {isSideMenuOpen} = useSelector((state: RootState) => state.menuSlice)
    const dispatch = useDispatch()

  return (
    <>
        <div className="w-16 h-full   bg-zinc-700 flex flex-col justify-between items-center px-5 relative">
            <div className="mt-3 w-full h-28 flex flex-col justify-around items-center ">
                <div className="boton-menu w-10 h-10  rounded-full bg-gradient-to-t from-pink-600  to-purple-700 flex justify-center items-center cursor-pointer  ">
                  <FaUser size={20} className="text-white "/>
                </div>
                <div 
                    className="boton-menu w-10 h-10 rounded-full bg-gradient-to-t from-pink-600  to-purple-700 flex justify-center items-center cursor-pointer"
                    onClick={()=>dispatch(changeToogleMenu())}
                >
                 <IoMdChatbubbles className="text-white" size={20} />
                </div>
            </div>
            <div className="w-full h-36  flex flex-col justify-end items-center">

                <div className="boton-menu w-10 h-10 mb-6 rounded-full bg-gradient-to-t from-pink-600  to-purple-700 flex justify-center items-center cursor-pointer">
                    <IoLogOut size={20} className="text-white"/>
                </div>
        
            </div>
        </div>
        {
            isSideMenuOpen &&
            <div 
                className={`sideTransition h-full bg-zinc-800 ${isSideMenuOpen ? 'opacity-100' : 'opacity-0'}`}
                
                onClick={()=>dispatch(changeToogleMenu())} >
                
            </div>
            

        }
    </>
  )
}

