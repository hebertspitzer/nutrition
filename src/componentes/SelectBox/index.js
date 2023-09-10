import './SelectBox.css'

const SelectBox = (props) => {
    const whenSelected = (event) => {
        props.whenChanged(event.target.value)
    }

    return (
        <div className='select-box'>
            <label>{props.label}</label>
            <select value={props.value} onChange={whenSelected}>
                {props.itens.map(item => <option key={item.name}>{item.name}</option>)}
            </select>
        </div>
    )
}

export default SelectBox