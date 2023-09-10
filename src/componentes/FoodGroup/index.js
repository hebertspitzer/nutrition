import './FoodGroup.css'
import FoodCard from '../FoodCard'

const FoodGroup = (props) => {

    return (
        props.foods.length > 0 ? <section className='foodGroup' style={{backgroundColor: props.group.secondaryColor}}>
            <h3 style={{borderBottomColor: props.group.primaryColor}}>{props.group.name}</h3>
            <div className='foods'>
                {props.foods.map(food => <FoodCard key={food.name} food={food} color={props.group.primaryColor}/>)}
            </div>
        </section>
        : ''
    )
}

export default FoodGroup