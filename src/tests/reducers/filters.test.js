import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', ()=>{
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', ()=>{
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', ()=>{
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

//should set text filter
test('should set text filter', ()=>{
    const dummyText = 'test me';
    const action = { type: 'SET_TEXT_FILTER', text: dummyText }
    const state  = filtersReducer(undefined, action);
    expect(state.text).toBe(dummyText);
});

//should set startDate filter
test('should set startDate filter', ()=>{
    const testStart = moment(0);
    const action = { type: 'SET_START_DATE', date: testStart }
    const state  = filtersReducer(undefined, action);
    expect(state.startDate).toBe(testStart);
});


//should set endDate filter
test('should set startDate filter', ()=>{
    const testEnd = moment().endOf('month').add(4, 'days').valueOf()
    const action = { type: 'SET_END_DATE', date: testEnd }
    const state  = filtersReducer(undefined, action);
    expect(state.endDate).toBe(testEnd);
});
