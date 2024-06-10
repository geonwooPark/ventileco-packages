import { useRef, useState } from 'react'
import CheckBox from './components/CheckBox/CheckBoxMain'

const checkBoxList = [
  { id: 0, value: 'january', label: 'January' },
  { id: 1, value: 'february', label: 'February' },
  { id: 2, value: 'march', label: 'March' },
]

function App() {
  const [values, setValues] = useState<(string | number)[]>([])

  const ref = useRef<HTMLFieldSetElement>(null)

  return (
    <div>
      <CheckBox
        as="fieldset"
        defaultValues={values}
        setValues={setValues}
        ref={ref}
      >
        <CheckBox.Title>Controlled</CheckBox.Title>
        <CheckBox.List className="flex gap-2">
          {checkBoxList.map((item) => (
            <CheckBox.Item key={item.id} value={item.value}>
              {({ isSelected }) => (
                <div
                  className={`${isSelected && 'text-blue-600'} cursor-pointer rounded-md border border-black px-3 py-2`}
                >
                  <div className="flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </div>
                  <p>{item.label}</p>
                </div>
              )}
            </CheckBox.Item>
          ))}
        </CheckBox.List>
      </CheckBox>
    </div>
  )
}

export default App
