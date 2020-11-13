import {Fragment} from 'react'


const BudgetControl = ({budget, leftover}) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: ${budget}
            </div>

            <div className="alert">
                Restante: ${leftover}
            </div>

        </Fragment>
    );
}
 
export default BudgetControl;