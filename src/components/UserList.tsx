import React from 'react'
import { useAction } from '../hooks/useAction'
import { useTypedSelector } from '../hooks/useTypedSelector'

const UserList: React.FC = () => {
  const { users, error, loading } = useTypedSelector(state => state.user)
  const {fetchUsers} = useAction()

  React.useEffect(() => {
    fetchUsers()
  }, [])

  if (loading) {
    return <h1>Loading ...</h1>
  } else if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      {users.map(user =>
        <div key={user.id}>{user.name}</div>  
      )}
    </div>
  )
}

export default UserList