interface Prop{
  message:string
}


export const MessageUser = ({message}:Prop) => {
  return (
    <>
      <div className="box-message-user">
            <p>usuario</p>
      </div>
    </>
  )
}
