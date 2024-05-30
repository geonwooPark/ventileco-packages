import Button from './components/Button/Button'

function App() {
  return (
    <div>
      <Button
        type="button"
        isLoading={true}
        onClick={() => console.log('클릭')}
        className="h-[50px] w-[320px] rounded-md bg-black text-base font-bold text-white transition-all duration-200 hover:opacity-80"
      >
        <Button.Icon>
          <div className="mr-2 size-5 bg-gray-400" />
        </Button.Icon>
        <Button.Label>버튼임</Button.Label>
      </Button>
      <Button
        type="button"
        onClick={() => console.log('클릭')}
        className="h-[50px] w-[320px] rounded-md bg-black text-base font-bold text-white transition-all duration-200 hover:opacity-80"
      >
        <Button.Icon>
          <div className="mr-2 size-5 bg-gray-400" />
        </Button.Icon>
        <Button.Label>버튼임</Button.Label>
      </Button>
      <Button
        type="button"
        disabled
        onClick={() => console.log('클릭')}
        className="h-[50px] w-[320px] rounded-md bg-black text-base font-bold text-white transition-all duration-200 hover:opacity-80"
      >
        <Button.Icon>
          <div className="mr-2 size-5 bg-gray-400" />
        </Button.Icon>
        <Button.Label>버튼임</Button.Label>
      </Button>
    </div>
  )
}

export default App
