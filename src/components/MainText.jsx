const MainText = (props) => {
  return (
    <div>
        <h2 className={`${props.text_size} text-center text-black`}>{props.text}</h2>  
    </div>
  )
}

export default MainText