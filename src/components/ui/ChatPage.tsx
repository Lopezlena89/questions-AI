import { useState } from "react";
import { LuSendHorizonal } from "react-icons/lu";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { MessageUser } from "./MessageUser";
import { useMessageStore } from "../../hooks/useMessageStore";

export const ChatPage = () => {
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_GOOGLE_KEY);
  
  const [textAi, setTextAi] = useState('');
  const [getInfo, setGetInfo] = useState('');
  const { saveMessage } = useMessageStore();
 
  const onSubmit = async(data) =>{
    data.preventDefault();
    
    // For text-only input, use the gemini-pro model
    console.log('entro')
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});

    const prompt = textAi;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    setTextAi('');
    setGetInfo(text);
    await saveMessage(text);
  }

  return (
    <div className="w-full h-full flex justify-center text-white">
      <div className={`h-full flex flex-col justify-between w-full  ease-in-out duration-700`}>
        <div className="w-full h-5/6 flex justify-center items-center ">
          <div className="mt-10 w-5/6 h-full border boder-solid border-zinc-800 rounded-xl overflow-auto">
              <MessageUser message={getInfo}/>
          </div>
        </div>
        <div className="w-full h-1/5 flex justify-center items-center " >
          <form onSubmit={onSubmit}  className="formulario w-5/6 h-10 relative flex justify-center">
            <input 
              type="text" 
              placeholder="Message Ai" 
              value={textAi}
              className="boton-menu input-text p-5 pr-12 w-full h-10 border boder-solid border-zinc-700 rounded-2xl bg-zinc-900 outline-none text-pink-600 md:w-4/6 duration-500 " 
              onChange={({target})=>setTextAi(target.value)}
            />
            <div className="enviar relative">
              <button type="submit"><LuSendHorizonal className="absolute right-5 top-3 cursor-pointer hover:text-pink-600 duration-300" size={20}/></button>
            <div  className="texto tooltip bg-zinc-900 text-white">Enviar Mensaje</div>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  )
}
