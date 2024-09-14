import React, { useEffect } from 'react'
import GetCoins from '../GetCoins'

function Gallery() {
  useEffect(() => {
    document.title = "Gallery"
  }, [])
  return (
    <>
    <GetCoins />
    </>
  )
}

export default Gallery