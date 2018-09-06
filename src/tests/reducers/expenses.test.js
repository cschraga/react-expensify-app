import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', ()=>{
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
    //poop;
});

test('should remove valid expense by ID', ()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0],expenses[2]]);
});

test('should not remove expense if ID not found', ()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-66'
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', ()=>{
    const testExpense = {
        id: '666',
        description: 'describe potty',
        note: 'notes about potty',
        amount: 66,
        createdAt: 66
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense: testExpense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, testExpense]);
});


test('should edit an expense', ()=>{
    const altered = {
        id: '2',
        description: 'i just changed this',
        note: 'and this'
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: altered.id,
        updates: {
            description: altered.description,
            note: altered.note
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].description).toEqual(altered.description);
    expect(state[1].note).toBe(altered.note);
});


test('should not edit an expense if expense not found', ()=>{
    const altered = {
        id: '-66',
        description: 'i just changed this',
        note: 'and this'
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: altered.id,
        updates: altered
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});
