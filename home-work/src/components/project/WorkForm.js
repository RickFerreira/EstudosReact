import {useState, useEffect} from 'react'

import Input from "../form/Input"
import Select from "../form/Select"
import SubmitButton from '../form/SubmitButton'

import styles from './WorkForm.module.css'

function WorkForm({ handleSubmit, btnText, tarefaData }) {
  const [disciplinas, setDisciplinas] = useState([])
  const [tarefa, setTarefa] = useState(tarefaData || {})
  

  useEffect(() => {
    fetch('http://localhost:5000/disciplinas', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setDisciplinas(data)
      })
      .catch((err) => console.log(err))
  }, [])

  const submit = (e) => {
    e.preventDefault()
    console.log(tarefa)
    handleSubmit(tarefa)
  }

  function handleChange(e) {
    setTarefa({ ...tarefa, [e.target.name]: e.target.value })
  }

  function handleDisciplina(e) {
    setTarefa({ 
      ...tarefa, 
      disciplina:{
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    })
  }

  return (
    <form onSubmit={submit} className={styles.form}>
        <Input 
            type="text"
            text="Nome da tarefa:" 
            name="name"
            placeholder="Insira o nome da tarefa"
            handleOnChange={handleChange}
            value={tarefa.name}
        />
        <Input 
            type="text" 
            text="Descrição da tarefa:" 
            name="descricao"
            placeholder="Insira a descrição da tarefa"
            handleOnChange={handleChange}
            value={tarefa.descricao}
        />
        <Select 
          name="disciplina_id" 
          text="Disciplina" 
          options={disciplinas}
          handleOnChange={handleDisciplina}
          value={tarefa.disciplina ? tarefa.disciplina.id : ''}
        />       
        
        <Input 
          name="datetime" 
          text="Data e hora de entrega:" 
          id="date" 
          type="datetime-local"
          handleOnChange={handleChange}
          value={tarefa.date}
        />
        <SubmitButton text={btnText} />
    </form>
  )
}

export default WorkForm
