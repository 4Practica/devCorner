import { useEffect, useRef } from 'react'

export const useScrollToTop = (onRender = true) => {
  const refElement = useRef<HTMLElement>(null)
  const scrollToElement = () => {
    window.scrollTo({ behavior: 'smooth', top: 0 })
    if (refElement.current === undefined || refElement.current === null) {
      return
    }
    refElement.current.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (onRender) {
      scrollToElement()
    }
  }, [onRender])
  if (!onRender) {
    return {
      scrollToElement,
    }
  }
}
