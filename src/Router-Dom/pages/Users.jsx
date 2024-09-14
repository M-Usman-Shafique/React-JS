import React, { useEffect } from 'react'

function Users() {
  useEffect(() => {
    document.title = "Users"
  }, [])
  return (
    <div>
      <h1>Users Page</h1>
    </div>
  )
}

export default Users