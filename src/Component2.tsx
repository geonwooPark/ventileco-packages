import { useCount2 } from './App'

export default function Component2() {
  console.log('Component2 렌더링')

  const [value, setValue] = useCount2()

  return (
    <div>
      {value}
      <button onClick={() => setValue((prev) => prev + 2)}>버튼2</button>
    </div>
  )
}
