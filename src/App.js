import { useState, useEffect } from "react";
import Question from "./components/Question";
import Form from "./components/Form";
import List from "./components/List";
import BudgetControl from "./components/BudgetControl";

function App() {
  const [budget, setBudget] = useState(0); //presupuesto
  const [leftover, setLeftOver] = useState(0); //restante
  const [viewQuestion, setQuestion] = useState(true);
  const [spedings, setSpedings] = useState([]);
  const [speding, setSpeding] = useState({});
  const [createSpeding, setCreateSpeding] = useState(false);

  //actualiza el restante

  useEffect(() => {

    if(createSpeding) {
      setSpedings([
        ...spedings,
        speding
      ]);
      
      const presupuestoRestante = leftover - speding.quantity;
      setLeftOver(presupuestoRestante);
      setCreateSpeding(false);
    }
    

  }, [speding]);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
      </header>

      <div className="contenido-principal contenido">
        {viewQuestion ? (
          <Question
            setBudget={setBudget}
            setLeftOver={setLeftOver}
            setQuestion={setQuestion}
          />
        ) : (
          <div className="row">
            <div className="one-half column">
              <Form 
                setCreateSpeding = {setCreateSpeding}
                setCreateSpeding = {setCreateSpeding}
              />
            </div>
            <div className="one-half column">
              <List spedings = {spedings}/>
              <BudgetControl
                budget = {budget}
                leftover = {leftover}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
