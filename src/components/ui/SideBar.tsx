import { useEffect } from 'react';
import { FaUser } from "react-icons/fa";

import { IoLogOut } from "react-icons/io5";
import type { RootState } from '../../redux/store'
import {  useSelector } from "react-redux";
import { useAuthStore } from "../../hooks/useAuthStore";
import { useGroupMessageStore } from "../../hooks/useGroupMessage";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";


export const SideBar = () => {
    
    const {groupMessage} = useSelector((state:RootState) => state.groupMessage);
    const {startLogout} = useAuthStore();
    
    const {getGroupMessage,deleteGroup,deleteGroupMessage} = useGroupMessageStore()
    
    useEffect(() => {
      getGroupMessage()
    }, [])
    
    

  return (
    <>
        <div className="w-80 h-full   bg-zinc-800 flex flex-col justify-between items-center px-3 relative">
            <div className="mt-3 w-full flex flex-col ">
                <div className="flex items-center justify-between">
                    <div className='flex h-20 items-center pl-2'>
                        <div className="boton-menu w-7 h-7 rounded-full bg-gradient-to-t from-pink-600  to-purple-700 flex justify-center items-center cursor-pointer  ">
                            <FaUser size={14} className="text-white "/>
                        
                        </div>
                        <span className="ml-2 text-white font-light ">New Chat</span>
                    </div>
                    <HiMiniPencilSquare size={17} className='text-white cursor-pointer mr-3' onClick={()=>deleteGroup()} />
                </div>
                
                {/* <div 
                    className="boton-menu w-7 h-7 rounded-full bg-gradient-to-t from-pink-600  to-purple-700 flex justify-center items-center cursor-pointer"
                    onClick={()=>dispatch(changeToogleMenu())}
                >
                 <IoMdChatbubbles className="text-white" size={14} />
                </div> */}
                <div className='flex flex-col w-full mt-10 '>
                    <div className=' w-full h-full overflow-hidden flex flex-col items-center' >
                        {
                            groupMessage.map((messages,index) =>(
                                <div key={index} className="relative w-full  h-7 text-white font-thin overflow-hidden flex items-center rounded-md  hover:bg-zinc-600">
                                    <span className="absolute top-0 pl-2 w-[80%] h-7 " >{messages.message}</span>
                                   
                                    <button type='submit' onClick={()=>{ deleteGroupMessage(messages._id)}} className='absolute right-0 flex items-center cursor-pointer '>
                                        <RiDeleteBin6Line size={14} className=' text-red-500 mr-3 '/>
                                    </button>
                                   
                                </div>
                            ))
                        }
                    </div>
                </div>  
            </div>
            
            <div className="w-full h-36  flex flex-col justify-end pl-2 ">

                <div 
                    className="boton-menu w-7 h-7  mb-6 rounded-full bg-gradient-to-t from-pink-600  to-purple-700 flex justify-center items-center cursor-pointer"
                    onClick={()=>startLogout()}
                >
                    <IoLogOut size={14}  className="text-white"/>
                </div>
        
            </div>
        </div>
        {
            // isSideMenuOpen &&
            // <div 
            //     className={`sideTransition h-full bg-zinc-800 ${isSideMenuOpen ? 'opacity-100' : 'opacity-0'} flex flex-col items-center`}
               
            // >
            //     {/* <div className="w-full h-10 bg-white p-3 " >
                     
            //         <button onClick={()=>deleteGroupMessage()}>delete</button>
            //     </div>     */}
            //     {
            //         groupMessage.map((messages,index) =>(
            //             <>
            //                 <div key={index} className=" w-full m-1 p-2 h-6 bg-zinc-700 text-white font-thin overflow-hidden flex  items-center">
            //                     <span className="w-4/5 h-[10px] overflow-hidden">{messages.message}</span>
            //                 </div>
            //                 <RiDeleteBin6Line size={14}/>
            //             </>
            //         ))
            //     }
            // </div>
            

        }
    </>
  )
}

