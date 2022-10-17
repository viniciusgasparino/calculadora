



function Button({text,onClick,corBotao}){
  return(
    <button onClick={onClick} style={{
      backgroundColor: `${corBotao}`,
      border: "none",
      width: "40px",
      cursor: "pointer",
      height: "40px",
      margin: "10px",
      color: "blue",
      borderRadius: "20px"
    }}>
      {text}
    </button>
  )
}

Button.defaultProps = {
  corBotao: "lightblue"
}

export default Button