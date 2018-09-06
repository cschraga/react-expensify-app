
// Expenses Reducer. Acting on expenses KV pair as if filters KV wasnt there

const expensesReducerDefaultState = []; // doing this so that the expenses reducer parameters don't look overwhelming
export default (state = expensesReducerDefaultState, action) => { //state defaults to an empty array
    switch (action.type) {
        case 'ADD_EXPENSE':
            //return state.concat(action.expense); //concat returns a new value. push mutates the old one. This is the old way to do it
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(expense => expense.id !== action.id );
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense
                }
            });
        default:
            return state;
    }
};