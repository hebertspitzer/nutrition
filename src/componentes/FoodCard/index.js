import './FoodCard.css'

const FoodCard = (props) => {

    return(
        <div className='foodCard'>
            <div className='header' style={{backgroundColor: props.color}}>
                <h4>{props.food.name}</h4>
            </div>
            <div className='footer'>
                <h5>{props.food.amount + ' ' +(props.food.typeOfMeasure === 'Gramas' ? 'g' : 'ml')}</h5>
                <h5>{'Calorias totais: ' + (props.food.amount * (props.food.calories/100))}</h5>
                <h5>{props.food.description}</h5>
            </div>
        </div>
    )
}

export default FoodCard