import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React, { useState } from "react";

const ExpenseItem = (props) => {
    // document.getElementById('root').addEventListener() 일반 자바스크립트의 명령형 방식
    const [title, setTitle] = useState(props.title);
    console.log('ExpenseItem evaluated by React');
    // useState의 첫번째 값은 현재 상태값이고, 두번째값은 업데이트 될 값
    

    const clickHandler = () => {
        setTitle('Updated!');
        console.log('title')
    };

    return(
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );



}

export default ExpenseItem;