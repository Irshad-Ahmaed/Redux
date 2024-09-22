import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchUsers} from './userSlice'

const UsersViews = () => {
    const dispatch = useDispatch();
    const numberOfUsers = useSelector((state) => state.user)

    useEffect(()=> {
        dispatch(fetchUsers())
    },[])
  return (
    <div>
        { numberOfUsers.loading && <div>Loading ... </div> }

        { !numberOfUsers.loading && numberOfUsers.error ? <div>Error: {numberOfUsers.error}</div> : null }

        {
            numberOfUsers?.length !=0 ?
            <>
                <h2>Lists of all users</h2>
                {numberOfUsers?.data?.map((user) => (
                    <div key={numberOfUsers.id}>{user.id}- {user.name}</div>
                ))}
            </>
            :
            <>
                <h2>No users found</h2>
            </>
        }
    </div>
  )
}

export default UsersViews