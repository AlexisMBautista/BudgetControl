import {Fragment , useState} from 'react';
import Mistake from './Mistake';

const Question = ({setLeftOver, setBudget, setQuestion}) => {

    const [quantity, setQuantity] = useState(0);
    const [mistake, setMistake] = useState(false);

    //funcion que lee el presupuesto
    const defineBudget = e => {
        setQuantity(parseInt(e.target.value, 10));
    } 

    //submit para definir el presupuesto
    const addBudget = e => {
        e.preventDefault();
        //validar

        if(quantity <= 1  || isNaN(quantity)){
            setMistake(true);
            return;
        }
        // que hace en caso de que se pase la validacion
        setMistake(false);

        //guardar el restante y guardar la cantidad del Presupuesto
        setBudget(quantity);
        setLeftOver(quantity);
        setQuestion(false);
    }

    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            { mistake ? <Mistake message="El presupuesto es incorrecto"/> : null }

            <form onSubmit={addBudget}>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={defineBudget}
                />

                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir tu presupuesto"
                />
            </form>

        </Fragment>    
    );
}
 
export default Question;