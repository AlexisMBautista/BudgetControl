import ViewSpeding from "./ViewSpeding";

const List = ({spedings}) => 
    ( 
        <div className="gastos-realizados">
            <h2>Listado de Gastos</h2>
            {spedings.map(speding => (
                <ViewSpeding key={speding.id} speding = {speding}/>
            ))}
        </div>
    );

 
export default List;