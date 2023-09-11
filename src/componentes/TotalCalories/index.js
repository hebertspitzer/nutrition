import './TotalCalories.css' 

const TotalCalories = (props) => {
    return (
        props.foods.length > 0 ?
        <section className='total-calories'>
            <p>Total de calorias: {props.foods.map(food => food.amount*(food.calories/100)).reduce((indexTotal,indexUnit) => indexTotal+indexUnit)}</p>
        </section>
        : ''
    )
}

export default TotalCalories;