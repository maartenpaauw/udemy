import { createStore, combineReducers } from 'redux';

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(combineReducers({
  expences: expensesReducer,
  filters: filtersReducer,
}));

console.log(store.getState());

const demoState = {
  expenses: [{
    id: '1234567890',
    description: 'Stagevergoeding',
    note: 'Stagevergoeding van de maand november',
    amount: 35000,
    createdAt: 0,
  }],
  filters: {
    text: 'Stagevergoeding',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined,
  },
};
