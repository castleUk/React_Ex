
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/expenses/Expenses';
import React from 'react';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];


  const addExpenseHandler = expense => {
    console.log('IN app.js');
    console.log(expense);

  };

  // 예전의 리액트에서 사용하던 구문
  // return React.createElement( // 가지 요소를 가짐 첫번째인자는 생성해야하는 요소, 두번째는 이런 요소를 설정하는 객체, 세번쨰는 컨텐츠, 
  //   'div', 
  //   {},
  //   React.createElement('h2', {}, "Let's get started!" ),
  //   React.createElement(Expenses, {items: expenses})
  // );



  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
