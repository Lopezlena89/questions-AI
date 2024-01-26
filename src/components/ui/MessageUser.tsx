interface Prop{
  message:string
}


export const MessageUser = ({message}:Prop) => {
  return (
    <>
      <div className="w-5/6 h-auto border border-solid border-x-stone-500">
        <div >
          {message}
        </div>
      </div>
    </>
  )
}
