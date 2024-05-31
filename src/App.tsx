import Button from './components/Button/Button'

function App() {
  return (
    <Button
      type="button"
      className="h-[50px] w-[320px] rounded-md bg-black text-base font-bold text-white transition-all duration-200 hover:opacity-80"
    >
      <div className="flex items-center justify-center">
        <div className="mr-2 size-5 bg-gray-400" />
        <p>BUTTON</p>
      </div>
    </Button>
  )
}

export default App
