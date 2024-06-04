import { useForm } from 'react-hook-form'
import RadioGroup from './components/Radio/RadioGroup'

function App() {
  const { register, handleSubmit } = useForm({
    defaultValues: { number: 'number3' },
  })

  const onSubmit = (data: any) => console.log(data)

  const radioRegister = register('number', {
    required: '적어도 한 개를 선택해주세요.',
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <RadioGroup register={radioRegister} defaultValue={'number3'}>
        <RadioGroup.Title>With React Hook Form</RadioGroup.Title>
        <RadioGroup.List className="flex gap-4">
          <RadioGroup.Item id="0" value={'number1'}>
            {({ isSelected }) => (
              <div className="cursor-pointer rounded-md border border-black px-3 py-2">
                <div className="flex w-full justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={`size-6 ${isSelected && 'fill-active text-active'}`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </div>
                <p>기호1</p>
              </div>
            )}
          </RadioGroup.Item>

          <RadioGroup.Item id="1" value={'number2'}>
            {({ isSelected }) => (
              <div className="cursor-pointer rounded-md border border-black px-3 py-2">
                <div className="flex w-full justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={`size-6 ${isSelected && 'fill-active text-active'}`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </div>
                <p>기호2</p>
              </div>
            )}
          </RadioGroup.Item>

          <RadioGroup.Item id="2" value={'number3'}>
            {({ isSelected }) => (
              <div className="cursor-pointer rounded-md border border-black px-3 py-2">
                <div className="flex w-full justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={`size-6 ${isSelected && 'fill-active text-active'}`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </div>
                <p>기호3</p>
              </div>
            )}
          </RadioGroup.Item>
        </RadioGroup.List>
      </RadioGroup>
      <input type="submit" />
    </form>
  )
}

export default App
