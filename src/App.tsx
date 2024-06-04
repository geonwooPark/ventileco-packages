import CheckBoxGroup from './components/CheckBox/CheckBoxGroup'
import CheckBoxItem from './components/CheckBox/CheckBoxItem'
import { useForm } from 'react-hook-form'
import CheckBoxTitle from './components/CheckBox/CheckBoxTitle'
import CheckList from './components/CheckBox/CheckBoxList'
import { useState } from 'react'

function App() {
  const [values, setValues] = useState<(string | number)[]>([])

  const { register, handleSubmit } = useForm({
    defaultValues: { months: ['January'] },
  })

  const onSubmit = (data: any) => console.log(data)

  const checkBoxRegister = register('months', {
    required: '적어도 한 개를 선택해주세요.',
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CheckBoxGroup defaultValues={['January']}>
        <CheckBoxTitle>CheckBox</CheckBoxTitle>
        <CheckList className="flex gap-2">
          <CheckBoxItem value="January" register={checkBoxRegister}>
            {({ isSelected }) => (
              <div
                className={`${isSelected && 'text-active'} cursor-pointer rounded-md border border-black px-3 py-2`}
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
                <p>January</p>
              </div>
            )}
          </CheckBoxItem>
          <CheckBoxItem value="February" register={checkBoxRegister}>
            {({ isSelected }) => (
              <div
                className={`${isSelected && 'text-active'} cursor-pointer rounded-md border border-black px-3 py-2`}
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
                <p>February</p>
              </div>
            )}
          </CheckBoxItem>
        </CheckList>
      </CheckBoxGroup>
      <input type="submit" />
    </form>
  )
}

export default App
