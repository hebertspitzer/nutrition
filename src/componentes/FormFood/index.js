import './FormFood.css'
import { useState } from 'react'
import TextInput from '../TextInput'
import SelectBox from '../SelectBox'
import Button from '../Button'
import NumberField from '../NumberField'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const FormFood = (props) => {

    const [name, setName] = useState('')
    const [calories, setCalories] = useState('')
    const [amount, setAmount] = useState('')
    const [description, setDescription] = useState('')
    const [foodGroup, setFoodGroup] = useState(props.group[0].name)
    const [typeOfMeasure, setTypeOfMeasure] = useState('Gramas')


    const whenSaving = (event) => {
        event.preventDefault()
        props.whenRegisteringFood({
            name,
            calories,
            amount,
            description,
            foodGroup,
            typeOfMeasure
        })
        setName('');
        setCalories('');
        setAmount('');
        setDescription('');
        setFoodGroup(props.group[0].name);
        setTypeOfMeasure('Gramas');
        console.log(name,amount,calories,description,foodGroup,typeOfMeasure)
    }

    return (
        <section className="formulario">
            <form onSubmit={whenSaving}>
                <h2>Preencha os dados para criar o alimento</h2>
                <TextInput
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Informe o nome do alimento'
                    value={name}
                    whenChanged={value => setName(value)}
                />
                <FormControl>
                    <FormLabel className="label-medida"id="demo-row-radio-buttons-group-label">Forma de medida</FormLabel>
                    <RadioGroup
                        onChange={(e) => setTypeOfMeasure(e.target.value)}
                        value={typeOfMeasure}
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="mililitro" control={<Radio />} label="mililitro(ml)" />
                        <FormControlLabel value="Gramas" control={<Radio />} label="Gramas(g)" />
                    </RadioGroup>
                </FormControl>
                <NumberField
                    required={true}
                    label= 'Quantidade do alimento'
                    placeholder={'Informe a quantidade do alimento em ' + (typeOfMeasure === 'Gramas' ? 'gramas' : 'mililitros')}
                    value={amount}
                    whenChanged={value => setAmount(value)}
                />
                <NumberField
                    required={true}
                    label={'Calorias a cada 100 ' + (typeOfMeasure === 'Gramas' ? 'g' : 'ml')}
                    placeholder={'Informe as calorias do alimento a cada 100 ' + (typeOfMeasure === 'Gramas' ? 'g' : 'ml')}
                    value={calories}
                    whenChanged={value => setCalories(value)}
                />
                <TextInput
                    required={false}
                    label='Descrição'
                    placeholder='Crie uma breve descrição deste alimento'
                    value={description}
                    whenChanged={value => setDescription(value)}
                />
                <SelectBox
                    label='Refeição'
                    itens={props.group}
                    value={foodGroup}
                    whenChanged={value => setFoodGroup(value)}
                />
                <Button>Enviar</Button>
            </form>
        </section>
    )
}

export default FormFood