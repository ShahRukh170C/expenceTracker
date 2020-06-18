import React from 'react';

import { GlobleContext } from './stateAndReducer/GlobelState'

const totalBalance = (itemList) => {
    const itemPrice = itemList.map(item => (item.price))
    const totalAmount = itemPrice.reduce((tot, itm) => (tot += itm),0)
    return totalAmount
}


const expenceAndIncome = (itemList) => {

    const expence = itemList.filter((item) => (item.price < 0))
    const itemPrice = expence.map(item => (item.price))
    const tot_expence = itemPrice.reduce((tot, itm) => (tot += itm),0)



    // income

    const income = itemList.filter((item) => (item.price > 0))
    const incomePrice = income.map(item => (item.price))
    const tot_income = incomePrice.reduce((tot, itm) => (tot += itm),0)

    console.log(`${tot_income}  ${tot_expence}`)
    return {
        income: tot_income,
        expence: tot_expence
    }
}



let Balance_expence = () => {

    const value = React.useContext(GlobleContext);

    const total = totalBalance(value.transaction)
    const exp_income = expenceAndIncome(value.transaction)
    console.log(exp_income)
    return (
        <section className="expence-price">
            <div className="box tot-balance">
                <span className="text">YOUR BALANCE</span>
                <span className="user-amount">$ {total}</span>
            </div>
            <div className="box tot-income">
                <span className="text">INCOME</span>
                <span className="user-income">$ {exp_income.income}</span>
            </div>
            <div className="box tot-expence">
                <span className="text">EXPENCE</span>
                <span className="user-expence">$ {Math.abs(exp_income.expence)}</span>
            </div>
        </section>
    );
}

export default Balance_expence;