import Message from '../layout/Message'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
import Loading from '../layout/Loading'
import TarefaCard from '../project/TarefaCard'

import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

import styles from './Tarefas.module.css'

function Tarefas() {
  const [tarefas, setTarefas] = useState([])
  const [removeLoading, setRemoveLoading] = useState(false)
  const [tarefaMessage, setTarefaMessage] = useState('')

  const location = useLocation()
  let message = ''
  if (location.state) {
    message = location.state.message
  }

  useEffect(() => {
    // Para ver o loading
    setTimeout(
      () =>
        fetch('http://localhost:5000/tarefas', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            setTarefas(data)
            setRemoveLoading(true)
          }),
      500,
    )
  }, [])

  function removeTarefa(id) {
    fetch(`http://localhost:5000/tarefas/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setTarefas(tarefas.filter((tarefa) => tarefa.id !== id))
        setTarefaMessage('Tarefa finalizada com sucesso')
      })
  }

  return (
    <div className={styles.tarefas_container}>
      <div className={styles.title_container}>
        <h1>Minhas tarefas</h1>
        <LinkButton to="/newwork" text="Criar nova tarefa" />
      </div>
      {message && <Message type="success" msg={message}/>}
      {tarefaMessage && <Message type="success" msg={tarefaMessage} />}

      <Container customClass="start">
        {tarefas.length > 0 &&
            tarefas.map((tarefa) => (
              <TarefaCard
                id={tarefa.id}
                name={tarefa.name}
                descricao={tarefa.descricao}
                disciplina={tarefa.disciplina.name}
                datetime={tarefa.datetime}
                key={tarefa.id}
                handleRemove={removeTarefa}
              />
            ))}
          {!removeLoading && <Loading />}
          {removeLoading && tarefas.length === 0 && (
            <p className={styles.atividades}>Você não tem tarefas para fazer no momento!</p>
          )}
      </Container>

    </div>
  )
}
  
export default Tarefas
  