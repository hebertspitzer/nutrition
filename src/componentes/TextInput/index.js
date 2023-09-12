import './TextInput.css'

const TextInput = (props) => {

    const whenTyping = (event) => {
        props.whenChanged(event.target.value)
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input id={props.id} value={props.value} onChange={whenTyping} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default TextInput