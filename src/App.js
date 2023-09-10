import { useState } from 'react';
import Banner from './componentes/Banner';
import FormFood from './componentes/FormFood';
import FoodGroup from './componentes/FoodGroup';
import Footer from './componentes/Footer';

function App() {

  const group = [
    {
      name: "Fruta",
      primaryColor: "#57C278",
      secondaryColor: "#d9f7e9"
    },
    {
      name: "Carnes",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF"
    },
    {
      name: "Hortaliças",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2"
    },
    {
      name: "Açúcares e doces",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8"
    },
    {
      name: "Óleos e gorduras",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5"
    },
    {
      name: "Leite e derivados",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9"
    }
  ]

  const [foods, setFoods] = useState([])

  const newFood = (food) => {
    setFoods([...foods, food])
  }

  return (
    <div className="App">
      <Banner/>
      <FormFood group={group} whenRegisteringFood={(food) => newFood(food)}/>
      {group.map(group => <FoodGroup 
        key={group.name} 
        group={group}
        foods={foods.filter(food => food.foodGroup === group.name)}
      />)}
      <Footer/>
    </div>
  );
}

export default App;
