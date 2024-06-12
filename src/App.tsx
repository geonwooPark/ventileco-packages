import { useRef } from 'react'
import Box from './components/Box/Box'

function App() {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <Box>
      <Box as="div" className="size-[40px] bg-red-400" ref={ref} />
      <Box as="button" className="bg-blue-400 px-4 py-3">
        Button
      </Box>
    </Box>
  )
}

export default App
