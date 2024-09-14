import React, { useEffect } from 'react'

function Home() {

  useEffect(() => {
    document.title = "Home"
  }, [])
  return (
    <div>
      <h1>Homepage</h1>
    </div>
  )
}

export default Home