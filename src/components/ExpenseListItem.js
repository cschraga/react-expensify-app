//Export a stateless functional component
//desc, amt, note, created at

import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
    <div>
       <h3>{description}</h3>
       <p>
         <b>Amount:</b> {numeral(amount/100).format('$0,0.00')},
         <b>Created At:</b> {moment(createdAt).format('MMMM Do, YYYY')} &nbsp;
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
