import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

const AddExpensePage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
            onSubmit={(expense)=> {
                //props.dispatch(addExpense(expense)); Commenting out cause this way is untestable
                props.onSubmit(expense);
                props.history.push('/');
            }}
        />
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);