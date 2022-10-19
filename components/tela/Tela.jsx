import styles from "./Tela.module.css"

    
function Tela(props){
  return(
    <div className={styles.tela}>
      {props.children}
    </div>
  )
}


export default Tela