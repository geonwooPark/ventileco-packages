import { useRef, useState } from 'react'
import Box from './components/Box/Box'

function App() {
  const ref = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Box>
      <Box as="div" className="size-[40px] bg-red-400" ref={ref} />
      <Box
        as="button"
        onClick={() => setIsOpen(true)}
        className="bg-blue-400 px-4 py-3"
      >
        Button
      </Box>
      {isOpen && <div className="h-[3000px] w-[200px] bg-red-400"></div>}
    </Box>
  )
}

export default App
