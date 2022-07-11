import { useEffect, useState } from 'react'

const useWindowWidth = () => {
  if (typeof window !== "undefined") {
    const [resized, setResized] = useState(0)
    let timer: NodeJS.Timeout | null;
    const handleResize = () => {
      timer = setTimeout(() => {
        setResized(state => state + 1);
      }, 250)
    }

    useEffect(() => {
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize);
        if(timer) clearTimeout(timer);
      }
    }, [window.innerWidth])

    return resized
  }
}

export default useWindowWidth;