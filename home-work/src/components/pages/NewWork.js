import {useNavigate} from 'react-router-dom' 

import WorkForm from '../project/WorkForm'

import styles from './NewWork.module.css'

function NewWork() {


  const navigate = useNavigate()

  function createPost(tarefa) {

    tarefa.cost = 0
    tarefa.services = []

    fetch("http://localhost:5000/tarefas", {
      method: 'POST', 
      headers: {
        'Content-type': 'application/json', 
      },
      body: JSON.stringify(tarefa),
    })
      .then(resp => resp.json())
      .then((data) => {
      console.log(data)
      // redirect
      navigate('/tarefas', {message: 'Tarefa criada com sucesso'})
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className={styles.newwork_container}>
      <h1><span>Criar nova tarefa</span></h1>
      <WorkForm handleSubmit={createPost} btnText="Adicionar tarefa"/>
    </div>
  )
}

export default NewWork