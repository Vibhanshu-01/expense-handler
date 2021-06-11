import React,{useState} from 'react'; 
import './NewExpense.css' ;
import ExpenseForm from './ExpenseForm.js';
const NewExpense = (props) => {
  const SaveExpenseDataHandler= (enteredExpenseData) =>
  {
    const expenseData = {
    ...enteredExpenseData ,
    id : Math.random().toString() 
  };
 props.onAddExpense(expenseData) ;
 setisEditing(false) ;

  };
  const [isEditing, setisEditing] = useState(false) ;
  const stopEditingHandler = ()=>{
    setisEditing(false) ; 
  }
  const startEditingHandler = () => {
    setisEditing(true);
  }

   return (
     <div className = "new-expense">
       {!isEditing  && (<button onClick={startEditingHandler}>Add New Expense</button>)}
       { isEditing  && (<ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} onCancel={stopEditingHandler}/>) }
     </div>

   );

};

export default NewExpense ;  