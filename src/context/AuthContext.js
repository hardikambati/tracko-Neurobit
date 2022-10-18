import React, { createContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [track, setTrack] = React.useState([
        {
            id: 1, 
            description: 'Car-Tyre Repair',
            amount: 299,
            date: 'Dec 9, 2022',
            category: 'expense'
        },
        {
            id: 2, 
            description: 'Stocks',
            amount: 500,
            date: 'Dec 4, 2022',
            category: 'income'
        }
    ]);

    
    React.useEffect(() => {
    }, [])

    
    function addTaskContext(description, amount, category) {
        const new_id=track.length + 1;
        const new_task={
            id: new_id, 
            description,
            amount,
            // date,
            category
        }

        setTrack(oldTrack => [...oldTrack, new_task]);
    }


    function deleteTaskContext(id) {
        const newTrack = track.filter(item => item.id !== id);
        setTrack(newTrack);
    }


    return (
        <AuthContext.Provider
            value={{
                track,
                addTaskContext,
                deleteTaskContext, 
            }}
        >
            {children}
        </AuthContext.Provider>
    );

};