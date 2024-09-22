import { useEffect } from 'react'
import {fetchUsers} from './userSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'

const UsersViews = () => {
    const dispatch = useAppDispatch();
    const numberOfUsers = useAppSelector((state) => state.user)

    useEffect(()=> {
        dispatch(fetchUsers())
    },[])
  return (
    <div>
        { numberOfUsers.loading && <div>Loading ... </div> }

        { !numberOfUsers.loading && numberOfUsers.error ? <div>Error: {numberOfUsers.error}</div> : null }

        {
            numberOfUsers?.data.length !=0 ?
            <>
                <h2>Lists of all users</h2>
                {numberOfUsers?.data.map((user) => (
                    <div key={user.id}>{user.id}- {user.name}</div>
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