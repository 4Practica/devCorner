import { useState, useEffect } from 'react'

type ScreenSizeType = {
  width: number
  height: number
}
const useScreenSize = (): ScreenSizeType => {
  const [screenSize, setScreenSize] = useState<ScreenSizeType>({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return screenSize
}

export default useScreenSize
