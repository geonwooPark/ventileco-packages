import { useToast } from './components/Toast/useToast'

function App() {
  const addToast = useToast()

  return (
    <div>
      <button onClick={() => addToast.success('성공 메시지')}>버튼</button>
      <button onClick={() => addToast.error('실패 메시지')}>버튼</button>
      <button onClick={() => addToast.info('인포 메시지')}>버튼</button>
    </div>
  )
}

export default App
