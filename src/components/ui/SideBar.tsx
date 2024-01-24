import { FaUser } from "react-icons/fa";
import { IoMdChatbubbles } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { MdNightlight,MdLightMode } from "react-icons/md";


export const SideBar = () => {
  return (
    <>
        <div className="w-16 h-full bg-zinc-700 flex flex-col justify-between items-center">
            <div className="w-full h-28 flex flex-col justify-around items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-t from-pink-600  to-purple-700 flex justify-center items-center cursor-pointer">
                  <FaUser size={20} className="text-white"/>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-t from-pink-600  to-purple-700 flex justify-center items-center cursor-pointer">
                 <IoMdChatbubbles className="text-white" size={20}/>
                </div>
            </div>
            <div className="w-full h-36  flex flex-col justify-around items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-t from-pink-600  to-purple-700 flex justify-center items-center cursor-pointer">
                    <MdLightMode size={20} className="text-white"/>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-t from-pink-600  to-purple-700 flex justify-center items-center cursor-pointer">
                    <MdNightlight className="text-white" size={20}/>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-t from-pink-600  to-purple-700 flex justify-center items-center cursor-pointer">
                    <IoLogOut size={20} className="text-white"/>
                </div>
                
            </div>
        </div>
        <div className="w-72 h-full bg-zinc-800 hidden">

        </div>
    </>
  )
}
