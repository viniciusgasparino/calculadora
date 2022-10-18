import styles from "./Calculadora.module.css"
import Button from "../butom/Button"
import Tela from "../tela/Tela"
import H2 from "../h2/H2"



function Calculadora(){
  return(
    <div className={styles.container}>
      <Tela><H2></H2></Tela>
      <div className={styles.content}>
        <Button text="1" corBotao="green"/>
        <Button text="2" />
        <Button text="3" />
        <Button text="4" />
        <Button text="5" />
        <Button text="6" />
        <Button text="7" />
        <Button text="8" />
        <Button text="9" />
        <Button text="0" />
        <Button text="AC"/>
        <Button text="+" />
        <Button text="-" />
        <Button text="*" />
        <Button text="/" />
        <Button text="%" />
        <Button text="." />
        <Button text="<-"/>
      </div>
    </div>
  )
}


export default Calculadora