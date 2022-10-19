import React, { createContext, useState } from "react";
// import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [track, setTrack] = React.useState([
        {
            id:1,
            description: 'Car Repair',
            amount: 299,
            date: 'Oct 15',
            category: 'expense'
        },
        {
            id: 2, 
            description: 'Stock Dividend',
            amount: 500,
            date: 'Oct 10',
            category: 'income'
        }
    ]);

    const [totalIncome, setIncome] = useState(0);
    const [totalExpense, setExpense] = useState(0);

    
    function addTaskContext(description, amount, date, category) {
        let new_date = new Date(date);
        new_date = new_date.toString();
        date=new_date.slice(4, 10);

        const new_id = new Date().getTime() + Math.random();

        const new_task={
            id: new_id,
            description,
            amount,
            date,
            category
        }

        setTrack(oldTrack => [new_task, ...oldTrack]);
    }


    function deleteTaskContext(id) {
        const newTrack = track.filter(item => item.id !== id);
        setTrack(newTrack);
    }


    function calculateStats() {
        let income_cal=0;
        let expense_cal=0;
        track.map((item) => {
            if(item.category === 'income') {
                income_cal += parseFloat(item.amount);
            } else if(item.category === 'expense') {
                expense_cal += parseFloat(item.amount);
            }
        })

        setIncome(income_cal);
        setExpense(expense_cal);
    }


    React.useEffect(() => {
        calculateStats();
    }, [track])


    return (
        <AuthContext.Provider
            value={{
                track,
                addTaskContext,
                deleteTaskContext, 
                totalIncome,
                totalExpense,
            }}
        >
            {children}
        </AuthContext.Provider>
    );

};