
const ViewSpeding = ({speding}) => 
    ( 
        <li className="gastos">
            <p>
                {speding.name}
                <span className="gasto"> ${speding.quantity} </span>
            </p>
        </li>

    );

 
export default ViewSpeding;