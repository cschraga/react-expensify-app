//Export a stateless functional component
//desc, amt, note, created at

import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import {Link} from 'react-router-dom';

export const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
    <div>
       <h3>{description}</h3>
       <p>
         <b>Amount:</b> {amount}, <b>Created At:</b> {createdAt} &nbsp;
         <Link to={`/edit/${id}`}>Edit</Link>
       </p>
    </div>
 );

/* 
const mapStateToProps = (state) => {
    return {
        description: state.expenses.description,
        amount:  state.expenses.amount,
        createdAt: state.expenses.createdAt
    };
};
*/

//export default ExpenseListItem;

export default connect()(ExpenseListItem);
