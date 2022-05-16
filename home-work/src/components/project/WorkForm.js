import Input from "../form/Input"
import Select from "../form/Select"
import styles from './WorkForm.module.css'
import SubmitButton from '../form/SubmitButton'

function WorkForm({btnText}) {
  return (
    <form className={styles.form}>
        <Input 
            type="text"
            text="Nome da tarefa" 
            name="name"
            placeholder="Insira o nome da tarefa"
        />
        <Input 
            type="text" 
            text="Descrição da tarefa" 
            name="descricao"
            placeholder="Insira a descrição da tarefa"
        />
        <Select name="category_id" text="Disciplina da tarefa"/>       
        
        <Input name="datetime" text="Data e hora de entrega" id="date" type="datetime-local"/>
        
        <SubmitButton text={btnText} />
    </form>
  )
}

export default WorkForm
