import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

/*
//addExpense -> Water
store.dispatch(addExpense({
    description: 'Water Bill',
    note: 'Bill for November 2011',
    amount: 1000,
    createdAt: 1180
}));

//addExpense -> Gas
store.dispatch(addExpense({
    description: 'Gas Bill',
    note: 'Gas for May 2015',
    amount: 2500,
    createdAt: 3280
}));

//addExpense -> Gas
store.dispatch(addExpense({
    description: 'rent',
    note: 'Gas for May 2015',
    amount: 100000,
    createdAt: -3280
}));

//setTextFilter -> Bill
store.dispatch(setTextFilter('bill'));


//getVisibleExpenses
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);
*/

const store = configureStore();
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);



ReactDOM.render(jsx, document.getElementById('app'));