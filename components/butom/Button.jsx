

function Button({text,value,onClick,corBotao}){
  return(
    <button value={value} onClick={onClick} style={{
      backgroundColor: `${corBotao}`,
      border: "none",
      width: "40px",
      cursor: "pointer",
      height: "40px",
      color: "#050211",
      fontWeight: "bold",
      borderRadius: "10px"
    }}>
      {text}
    </button>
  )
}

Button.defaultProps = {
  corBotao: "white"
}

export default Button