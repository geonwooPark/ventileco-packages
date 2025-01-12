import { useCount1 } from './App'

export default function Component1() {
  console.log('Component1 렌더링')

  const [value, setValue] = useCount1()

  return (
    <div>
      {value}
      <button onClick={() => setValue((prev) => prev + 1)}>버튼1</button>
    </div>
  )
}
