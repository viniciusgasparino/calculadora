import styles from "./Calculadora.module.css"
import Button from "../butom/Button"
import Tela from "../tela/Tela"
import H2 from "../h2/H2"
import {useState} from "react"


function Calculadora(){
  const [number,setNumber] = useState(0)

  const inputNumber = (e) => {
    if(number==0){
      setNumber(e.target.value)
    }else{
      setNumber(number + e.target.value)
    }
  }


  return(
    <div className={styles.container}>
      <Tela><H2>{number}</H2></Tela>
      <div className={styles.content}>
        <Button text="1" value={1} onClick={inputNumber} corBotao="green"/>
        <Button text="2" value={2} onClick={inputNumber} />
        <Button text="3" value={3} onClick={inputNumber} />
        <Button text="4" value={4} onClick={inputNumber} />
        <Button text="5" value={5} onClick={inputNumber} />
        <Button text="6" value={6} onClick={inputNumber} />
        <Button text="7" value={7} onClick={inputNumber} />
        <Button text="8" value={8} onClick={inputNumber} />
        <Button text="9" value={9} onClick={inputNumber} />
        <Button text="0" value={0} onClick={inputNumber} />
        <Button text="AC"value={"ac"} />
        <Button text="+" value={"+"} />
        <Button text="-" value={"-"} />
        <Button text="*" value={"*"} />
        <Button text="/" value={"/"} />
        <Button text="%" value={"%"} />
        <Button text="." value={"."} />
        <Button text="<-"value={"<-"} />
      </div>
    </div>
  )
}


export default Calculadora