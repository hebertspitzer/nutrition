import './Button.css'

const Button = (props) => {
    return (
        <button id={props.id} className="button">{props.children}</button>
    )
}

export default Button;