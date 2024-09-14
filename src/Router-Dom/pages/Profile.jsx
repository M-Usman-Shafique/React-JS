import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Profile() {
  const navigate = useNavigate();

  const redirect = () => {
    navigate('/Users')
  }

  useEffect(() => {
    document.title = "Profile"
  }, [])
  return (
    <div>
      <h1>Profile Page</h1>
      <button onClick={redirect}>Other Users</button>
    </div>
  )
}

export default Profile