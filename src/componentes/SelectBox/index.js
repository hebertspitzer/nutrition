import './SelectBox.css'

const SelectBox = (props) => {
    const whenSelected = (event) => {
        props.whenChanged(event.target.value)
    }

    return (
        <div className='select-box'>
            <label>{props.label}</label>
            <select value={props.value} onChange={whenSelected}>
                <option value=""></option>
                {props.itens.sort(props.sort).map(item => <option key={item.name}>{item.name}</option>)}
            </select>
        </div>
    )
}

export default SelectBox