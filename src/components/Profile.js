import React from 'react'
import { getUser } from '../graphql/auth/auth'

const Profile = () => {
  const user = getUser()

  return (
    <>
      <h2>My account</h2>
      <h3>Username: {user.username}</h3>
    </>
  )
}

export default Profile
