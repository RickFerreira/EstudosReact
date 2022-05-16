import styles from './Select.module.css'

function Select({ text, name, options, handleOnChange, value }) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name}>
                <option disable select>Selecione a disciplina</option>
                <option disable select>Cáculo II</option>
                <option disable select>Laboratorio de Programação Orientada a Objetos</option>
                <option disable select>Organização e Arquitetura de Software</option>
                <option disable select>Programação Orientada a Objetos</option>
                <option disable select>Relações Humanas no Trabalho</option>
                <option disable select>Teoria dos grafos</option>
            </select>
        </div>
    )
}

export default Select