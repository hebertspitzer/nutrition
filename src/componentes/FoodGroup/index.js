import './FoodGroup.css'
import FoodCard from '../FoodCard'

const FoodGroup = (props) => {

    return (
        props.foods.length > 0 ? <section className='foodGroup' style={{backgroundColor: props.group.secondaryColor}}>
            <h3 style={{borderBottomColor: props.group.primaryColor}}>{props.group.name}</h3>
            <div className='foods'>
                {props.foods.map(food => <FoodCard key={food.name} food={food} color={props.group.primaryColor}/>)}
            </div>
            <p>Calorias totais da refeição: {props.foods.map(food => food.amount*(food.calories/100)).reduce((accumulator, currentValue) => accumulator + currentValue)} calorias</p>
        </section>
        : ''
    )
}

export default FoodGroup