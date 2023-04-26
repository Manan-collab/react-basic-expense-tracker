import React, { ReactNode, createContext, useReducer } from "react";
import AppReducer from './AppReducer';
import Transaction from "../components/Transaction";

const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 1500 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
  deleteTransaction: (id: number) => {},
  addTransaction: (transaction: any) => {},

};


export const GlobalContext = createContext(initialState);

interface Props {
    children?: ReactNode
}
export const GlobalProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTransaction(id: any) {
      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id,
      })
    }

    function addTransaction(transaction: any) {
      dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction,
      })
    }

    return (<GlobalContext.Provider value={({
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
    })}>
        {children}
        </GlobalContext.Provider>)
}