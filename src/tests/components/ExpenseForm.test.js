import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should render expense form correctly', ()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

//should render expense form with fixture data
test('should render expense form with fixture data', ()=>{
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});

//test user interaction
test('should render error for invalid form submission', ()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {} //have to override because the shallow wrapper doesn't have an event object. Therefore event.preventDefault() fails.
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', ()=>{
    const wrapper = shallow(<ExpenseForm />);
    const value   = 'New Description';
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('description')).toBe(value);
});

//test on note change
test('test that on note change works', ()=>{
    const wrapper = shallow(<ExpenseForm />);
    const value   = 'Note Text';
    wrapper.find('textarea').simulate('change', {
        target: { value }
    });
    expect(wrapper.state('note')).toBe(value);
});

//set amount to valid value. $23.50. Should set the value since its valid
test('set amount to valid value, it should set the amount in the store', ()=>{
    const wrapper = shallow(<ExpenseForm />);
    const value   = '23.50';
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe(value);
});

//set amount to invalid value. $12.422. Should not set the value in the store
test('set amount to invalid value which should NOT set the value in the store', ()=>{
    const wrapper = shallow(<ExpenseForm />);
    const value   = '14.422';
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe("");
});

test('should call onSubmit prop for value form submission', ()=>{
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {} //have to override because the shallow wrapper doesn't have an event object. Therefore event.preventDefault() fails.
    });
    expect(wrapper.state('error')).toBe("");
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        createdAt: expenses[0].createdAt,
        amount: expenses[0].amount,
        note: expenses[0].note
    });
});

test('should set new date on date change', ()=>{
    const wrapper = shallow(<ExpenseForm />);
    const now = moment();
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

/*
test('should set calendarFocused to true on onCalendarFocusChange', ()=>{
    const wrapper = shallow(<ExpenseForm />);
    const focused = true;
    wrapper.find('SingleDatePicker').prop('onCalendarFocusChange')({ focused });
    expect(wrapper.state('calendarFocused')).toEqual(focused);
});
*/