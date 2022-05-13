import WorkForm from '../project/WorkForm'
import styles from './NewWork.module.css'

function NewWork() {
  return (
    <div className={styles.newwork_container}>
      <h1>Criar nova tarefa</h1>
      <p>Crie sua nova tarefa para depois adicionar as caracteristicas dela</p>
      <WorkForm />
    </div>
  )
}

export default NewWork