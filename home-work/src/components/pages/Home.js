import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem-vindo ao <span>Home Work</span>
      </h1>
      <p>Comece a anotar suas tarefas agora mesmo e nunca mais fique com materia acumulada!!</p>
      <LinkButton to="/newwork" text="Criar nova tarefa" />
      <img src={savings} alt="HomeWork" />
    </section>
  )
} 
export default Home