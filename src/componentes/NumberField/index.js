import './NumberField.css'

const NumberField = (props) => {

    const whenTyping = (event) => {
        props.whenChanged(event.target.value)
    }

    return (
        <div className="number-field">
        <label>{props.label}</label>
        <input type="number" value={props.value} onChange={whenTyping} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default NumberField