import styles from './TarefaCard.module.css'

import { BsFillTrashFill } from 'react-icons/bs'

/*<Link to={'/tarefas/' + id}>
<BsPencil /> Atualizar
</Link>*/
function TarefaCard({ id, name, descricao, disciplina, datetime, handleRemove }) {
  const remove = (e) => {
    e.preventDefault()
    handleRemove(id)
  }

  return (
    <div className={styles.tarefa_card}>
      <h4>{name}</h4>
      <p>
        <span>Descricão: </span>{descricao}
      </p>
      <p className={styles.disciplina_text}>
        <span className={`${styles[disciplina.toLowerCase()]}`}></span> {disciplina}
      </p>
      <p>
        <span>Entrega: </span>{datetime}
      </p>
      <div className={styles.tarefa_card_actions}>
        <button onClick={remove}>
          <BsFillTrashFill />
          Concluir
        </button>
      </div>
    </div>
  )
}

export default TarefaCard
