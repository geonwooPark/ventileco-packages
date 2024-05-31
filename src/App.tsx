import { useState } from 'react'
import Input from './components/Input/Input'

function App() {
  const [value, setValue] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setValue(value)
  }

  return (
    <div className="w-[240px]">
      <Input
        type="text"
        name="email"
        value={value}
        onChange={onChange}
        placeholder="Enter text"
        autoComplete="off"
      >
        <Input.Label>Input</Input.Label>
        <Input.Container className="h-[50px] rounded-md border px-2 text-black data-[disabled]:opacity-50">
          <Input.Icon>
            <div className="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
            </div>
          </Input.Icon>
          <Input.InputArea />
        </Input.Container>
      </Input>

      <Input
        type="password"
        name="password"
        value={value}
        onChange={onChange}
        placeholder="Password"
      >
        <Input.Label>Input</Input.Label>
        <Input.Container className="h-[50px] rounded-md border px-2 text-black data-[disabled]:opacity-50">
          <Input.InputArea />
        </Input.Container>
      </Input>
    </div>
  )
}

export default App
