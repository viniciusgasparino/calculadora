import styles from "./Calculadora.module.css"
import Button from "../butom/Button"
import Tela from "../tela/Tela"
import H2 from "../h2/H2"
import {useState} from "react"


function Calculadora(){
  const [number,setNumber] = useState(0)
  const [operator,setOperator] = useState()
  const [oldNumber,setOldNumber] = useState()
        

  const inputNumber = (e) => {
    if(number==0){
      setNumber(e.target.value)
    }else{
      setNumber(number + e.target.value)
    }
  }


  const clearNumber = () => {
    setNumber(0)
  }


  const handlerOperator = (e) => {
    setOperator(e.target.value)
    setOldNumber(number)
    setNumber("")
  }


  const calculator = () => {
    switch (operator) {
      case "+":
          setNumber(parseInt(oldNumber) + parseInt(number))
          setOperator("")
        break
      case "-":
          setNumber(parseInt(oldNumber) - parseInt(number))
          setOperator("")
        break
      case "*":
          setNumber(parseInt(oldNumber) * parseInt(number))
          setOperator("")
        break  
      case "/":
          setNumber(parseInt(oldNumber) / parseInt(number))
          setOperator("")
        break  
      case "%":
          setNumber((parseInt(oldNumber)/100) * parseInt(number).toFixed(1))
          setOperator("")
        break  
    }
  }

  const backSpace = (e) => {
    let valor = e.target.value
    String(valor)
    valor = valor.substring(0,(valor.length-1))   
    if(valor>0){
      setNumber(parseInt(valor)) 
    }
  }

  return(
    <div className={styles.container}>
      <Tela><H2>{number}</H2></Tela>
      <div className={styles.content}>
        <Button text="1" value={1} onClick={inputNumber} />
        <Button text="2" value={2} onClick={inputNumber} />
        <Button text="3" value={3} onClick={inputNumber} />
        <Button text="4" value={4} onClick={inputNumber} />
        <Button text="5" value={5} onClick={inputNumber} />
        <Button text="6" value={6} onClick={inputNumber} />
        <Button text="7" value={7} onClick={inputNumber} />
        <Button text="8" value={8} onClick={inputNumber} />
        <Button text="9" value={9} onClick={inputNumber} />
        <Button text="0" value={0} onClick={inputNumber} />
        <Button text="AC"value={"ac"} onClick={clearNumber} corBotao="#76ff03"/>
        <Button text="+" value={"+"} onClick={handlerOperator} corBotao="#1de9b6"/>
        <Button text="-" value={"-"} onClick={handlerOperator} corBotao="#1de9b6"/>
        <Button text="*" value={"*"} onClick={handlerOperator} corBotao="#1de9b6"/>
        <Button text="/" value={"/"} onClick={handlerOperator} corBotao="#1de9b6"/>
        <Button text="%" value={"%"} onClick={handlerOperator} corBotao="#1de9b6"/>
        <Button text="=" value={"="} onClick={calculator} corBotao="#ee9d33"/>
        <Button text="." value={"."} onClick={inputNumber} />
        <Button text="<-" value={number} onClick={backSpace} />
      </div>
    </div>
  )
}


export default Calculadora