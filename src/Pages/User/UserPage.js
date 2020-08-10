import React from 'react'
import SignIn from '../../Components/Auth/SignIn'
import SignUp from '../../Components/Auth/SignUp'
import useAuth from '../../Components/Auth/useAuth'
import ProfilePage from '../../Components/Auth/Profile'

export const UserPage = () => {
  const user = useAuth()
  if(user){
    return <ProfilePage/>
  }
  return <div>
    <SignUp/>
    <SignIn/>
  </div>
}

export default UserPage