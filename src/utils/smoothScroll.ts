export const smoothScroll = (element: HTMLElement, position: number) => {
  return new Promise<void>((resolve) => {
    element.scrollTo({
      left: position,
      behavior: 'smooth',
    })

    const handleScroll = () => {
      if (Math.abs(element.scrollLeft - position) < 1) {
        element.removeEventListener('scroll', handleScroll)
        resolve()
      }
    }

    element.addEventListener('scroll', handleScroll)
  })
}

export const updateFirstNodes = (element: HTMLElement, step: number) => {
  return new Promise<void>((resolve) => {
    for (let i = 0; i < step; i++) {
      if (element.lastChild) {
        const child = element.lastChild
        element.removeChild(child)
        element.insertBefore(child, element.firstChild)
      }
    }

    resolve()
  })
}

export const updateLastNodes = (element: HTMLElement, step: number) => {
  return new Promise<void>((resolve) => {
    for (let i = 0; i < step; i++) {
      if (element.firstChild) {
        const child = element.firstChild
        element.removeChild(child)
        element.appendChild(child)
      }
    }

    resolve()
  })
}
