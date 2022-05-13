import styles from './WorkForm.module.css'

function WorkForm() {
  return (
    <form className={styles.form}>
        <div>
            <input type="text" placeholder="Insira o nome da tarefa"/>
        </div>
        <div>
            <input type="text" placeholder="Insira a descrição da tarefa"/>
        </div>
        <div>
            <select type="category_id">
                <option disable select>Selecione a disciplina</option>
                <option disable select>Cáculo II</option>
                <option disable select>Laboratorio de Programação Orientada a Objetos</option>
                <option disable select>Organização e Arquitetura de Software</option>
                <option disable select>Programação Orientada a Objetos</option>
                <option disable select>Relações Humanas no Trabalho</option>
                <option disable select>Teoria dos grafos</option>
            </select>
        </div>
        <div>
            <input id="date" type="datetime-local"/>
        </div>
        <div>
            <input type="submit" value="Criar tarefa"/>
        </div>
    </form>
  )
}

export default WorkForm