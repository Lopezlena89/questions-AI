import clsx from "clsx";
import { closeSideMenu } from "../../redux/closeOpenSide";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useGroupMessageStore } from "../../hooks/useGroupMessage";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { onIdSelect } from "../../redux/idSelect";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MessageInterface } from "./ChatPage";


export const MiniSidebar = () => {
  const {isSideMenuOpen} = useSelector((state:RootState) => state.closeOpenSide);
  const {deleteGroup,deleteGroupMessage} = useGroupMessageStore()
  const {groupMessage} = useSelector((state:RootState) => state.groupMessage);
  const dispatch = useDispatch();
 
  return (
    <>
       <div className=" md:hidden">
        {isSideMenuOpen && (
          <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
          )}

          {/* Blur */}
          {isSideMenuOpen && (
              <div
              onClick={()=>dispatch(closeSideMenu())}
              className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
              />
          )}

          <div
            className={clsx(
              "fixed p-2 right-0 top-0 w-3/6 h-screen bg-zinc-800 z-20 shadow-2xl transform transition-all duration-300 sm:w-2/6  flex flex-col ",
              {
                "translate-x-full": !isSideMenuOpen,
              }
            )}
          >
            <div className="w-full h-14 flex items-center justify-center">
              <span className="ml-2 text-white font-light ">New Chat</span>
              <HiMiniPencilSquare size={20} className='text-white  ml-3 cursor-pointer hover:text-pink-500 duration-300' onClick={()=>deleteGroup()} />
            </div>
            <div className='scroll-sidebar flex flex-col w-full h-[80%] overflow-auto mt-5'>
                        <div className=' w-full full flex flex-col items-center' >
                            {
                                groupMessage.map((messages:MessageInterface,index) =>(
                                    <div 
                                        key={index} 
                                        className="relative w-full  h-7 text-white font-thin overflow-hidden flex items-center rounded-md 
                                        hover:bg-zinc-600"
                                        onClick={()=>dispatch(onIdSelect(messages._id))}
                                    >
                                        <span className="absolute top-0 pl-2 w-[80%] h-7 " >{messages.messageUser}</span>
                                    
                                        <button type='submit' onClick={()=>{ deleteGroupMessage(messages._id)}} className='absolute right-0 flex items-center cursor-pointer '>
                                            <RiDeleteBin6Line size={14} className=' text-red-500 mr-3 '/>
                                        </button>
                                    
                                    </div>
                                ))
                            }
                        </div>
                    </div>  
          </div>
       </div>
    </>
  )
}
