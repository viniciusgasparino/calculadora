



function Button({text,onClick}){
  return(
    <button onClick={onClick} style={{
      backgroundColor: "lightblue",
      border: "none",
      width: "40px",
      cursor: "pointer",
      height: "40px",
      margin: "10px",
      color: "blue"
    }}>
      {text}
    </button>
  )
}



export default Button