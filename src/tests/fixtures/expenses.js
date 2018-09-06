import moment from 'moment';

export default [{
    id: '1',
    description: 'gum',
    note: 'nuthin',
    amount: 100,
    createdAt: 0
}, {
    id: '2',
    description: 'rent',
    note: 'kein',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'credit card',
    note: 'nada',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
}];