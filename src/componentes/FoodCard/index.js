import './FoodCard.css'

const FoodCard = (props) => {

    return(
        <div className='foodCard'>
            <div className='header' style={{backgroundColor: props.color}}>
                <img src='https://github.com/hebertspitzer.png' alt='Hebert Spitzer'/>
            </div>
            <div className='footer'>
                <h4>{props.food.name}</h4>
                <h5>{props.food.description}</h5>
                <h5>{props.food.calories + ' calorias a cada 100g/100ml'}</h5>
            </div>
        </div>
    )
}

export default FoodCard