import WorkForm from '../project/WorkForm'
import styles from './NewWork.module.css'

function NewWork() {
  return (
    <div className={styles.newwork_container}>
      <h1><span>Criar nova tarefa</span></h1>
      <WorkForm btnText="Adicionar tarefa"/>
    </div>
  )
}

export default NewWork