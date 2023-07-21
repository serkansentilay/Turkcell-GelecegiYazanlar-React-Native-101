import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Item from './Item'
import { useUsers } from '../context/UsersContext'
import Message from './Message'
import Loading from './Loading'
import Error from './Error'
import useStore from '../store/useStore'

const List = () => {
    //  const { users, loading, error } = useUsers();
    const users = useStore(state => state.users);
    const loading = useStore(state => state.loading);
    const error = useStore(state => state.error);
    const fetchUsers = useStore(state => state.fetchUsers);

    useEffect(() => {
        fetchUsers()
    }, [])


    if (loading) {
        return <Loading message="Loading..." />
    }

    if (error) {
        return <Error message={error} />
    }


    return (
        <>
            {users.length === 0 && !loading && <Message message="No Item" />}
            <FlatList
                // data={[{ id: 1, name: "Ahmet" }, { id: 2, name: "mehmet" }]}
                data={users}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <Item user={item} />}
            />

        </>
    )
}

export default List

const styles = StyleSheet.create({})