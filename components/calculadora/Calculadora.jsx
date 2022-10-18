import styles from "./Calculadora.module.css"
import Button from "../butom/Button"
import Tela from "../tela/Tela"
import H2 from "../h2/H2"
import {useState} from "react"


function Calculadora(){
  const [number,setNumber] = useState(0)

  const inputNumber = (e) => {
    setNumber(e.target.value)
  }

  return(
    <div className={styles.container}>
      <Tela><H2>{number}</H2></Tela>
      <div className={styles.content}>
        <Button text="1" value={1} corBotao="green"/>
        <Button text="2" value={2} />
        <Button text="3" value={3} />
        <Button text="4" value={4} />
        <Button text="5" value={5} />
        <Button text="6" value={6} />
        <Button text="7" value={7} />
        <Button text="8" value={8} />
        <Button text="9" value={9} />
        <Button text="0" value={0} />
        <Button text="AC"value={"ac"}/>
        <Button text="+" value={"+"}/>
        <Button text="-" value={"-"}/>
        <Button text="*" value={"*"}/>
        <Button text="/" value={"/"}/>
        <Button text="%" value={"%"}/>
        <Button text="." value={"."}/>
        <Button text="<-"value={"<-"}/>
      </div>
    </div>
  )
}


export default Calculadora