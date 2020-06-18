import React, { createContext, useReducer } from 'react';

import AppReducer from './AppReducer'
// Create Inital State

let initalTransaction = {
    transaction: [

    ]
}

export const GlobleContext = createContext(initalTransaction)


export const GlobleProvider = ({children}) => {
    const [state,dispatch] = useReducer(AppReducer,initalTransaction)

    const deleteTransaction = (id) =>{
        dispatch({
            type:"Delete",
            payLoad: id
        })
    }

    const addTransaction = (transaction) =>{
        dispatch({
            type:"Add",
            payLoad: transaction
        })
        console.log(transaction)
    }
    
    return (
        <GlobleContext.Provider value = { {transaction: state.transaction, deleteTransaction ,addTransaction}}>
            {children}
        </GlobleContext.Provider>
    );
}

