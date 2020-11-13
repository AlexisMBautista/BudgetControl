import {useState} from 'react';
import Mistake from './Mistake';
import uuid from "react-uuid";
const Form = ({setCreateSpeding}) => {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [mistake, setMistake] = useState(false);

    const addSpeding = e => {
        e.preventDefault();

        //validar

        if(name.trim() === '' || quantity < 1 || isNaN(quantity)) {
            setMistake(true);
            return;
        }

        setMistake(false);

        //construir el gasto

        const speding = {
            name,
            quantity,
            id: uuid()
        }

        //pasar el gasto al componente principal
        setCreateSpeding(speding);
        setCreateSpeding(true);
        //resetear el gasto
        setName('');
        setQuantity(0);

    }


    return ( 
        <form onSubmit={addSpeding}>
            <h2>Coloca tus gastos aqui</h2>
            { mistake ?  <Mistake message="Ambos campos son obligatorios o presupuesto incorrecto"/> : null }

            <div className="campo">
                <label>Nombre del gasto</label>
                <input
                    className="u-full-width"
                    type="text"
                    placeholder="Ej. Pan"
                    value={name}
                    onChange={e => setName(e.target.value)}   
                />
            </div>

            <div className="campo">
                <label>Cantidad del gasto</label>
                <input
                    className="u-full-width"
                    type="number"
                    placeholder="Ej. 300"
                    value={quantity}
                    onChange={e => setQuantity(parseInt(e.target.value))}
                />
            </div>

            <input
                className="button-primary u-full-width"
                type="submit"
                value= "Agregar Gasto"   
            />
        </form>
     );
}
 
export default Form;