import { createContext, useContext, useState } from "react";
import axios from "axios"

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
const UsersContext = createContext();

export const UsersContextProvider = ({ children }) => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const addUser = (data) => {
        setUsers((prev) => [{ ...data, id: uuidv4() }, ...prev])
    }

    const loadData = () => {
        axios("https://jsonplaceholder.typicode.com/users")
            .then(res => setUsers(res.data))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false))
    }

    const removeUser = (id) => {
        const cloned = [...users]
        const index = cloned.findIndex((user) => user.id === id)
        cloned.splice(index, 1)
        setUsers(cloned)
    }

    const values = {
        users,
        loading,
        setUsers,
        addUser,
        removeUser,
        loadData,
        error,
    }


    return (
        <UsersContext.Provider value={values}>{children}</UsersContext.Provider>
    )
}

export const useUsers = () => {
    const context = useContext(UsersContext)
    if (context === undefined) {
        throw new Error("useTheme hook must be call inside ThemeContextProvider")
    }
    return context
}