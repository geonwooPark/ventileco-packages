import type { Meta } from '@storybook/react'
import { useRef, useState } from 'react'
import Radio from './RadioMain'
import { useForm } from 'react-hook-form'

const meta: Meta<typeof Radio> = {
  title: 'COMPONENTS/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
}

export default meta

const radioList = [
  { id: 0, value: 'number1', label: '기호1' },
  { id: 1, value: 'number2', label: '기호2' },
  { id: 2, value: 'number3', label: '기호3' },
]

export function Controlled() {
  const [value, setValue] = useState<
    string | number | readonly string[] | undefined
  >()

  const ref = useRef<HTMLDivElement>(null)

  return (
    <div className="w-[240px]">
      <Radio
        defaultValue={value}
        setValue={setValue}
        name="Controlled"
        ref={ref}
      >
        <Radio.Title>제어 컴포넌트</Radio.Title>
        <Radio.List className="flex flex-col gap-2">
          {radioList.map((item) => (
            <Radio.Item key={item.id} value={item.value}>
              {({ isSelected }) => (
                <div className="flex w-full cursor-pointer justify-between rounded-md border border-black px-4 py-3">
                  <p>{item.label}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={`size-6 ${isSelected && 'fill-blue-600 text-blue-600'}`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </div>
              )}
            </Radio.Item>
          ))}
        </Radio.List>
      </Radio>
    </div>
  )
}

export function WithReactHookForm() {
  const { register, handleSubmit } = useForm({
    defaultValues: { number: 'number1' },
  })

  const onSubmit = (data: any) => console.log(data)

  const radioRegister = register('number', {
    required: '적어도 한 개를 선택해주세요.',
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Radio as="fieldset" register={radioRegister} defaultValue="number1">
        <Radio.Title>With React Hook Form</Radio.Title>
        <Radio.List className="flex gap-4">
          {radioList.map((item) => (
            <Radio.Item key={item.id} value={item.value}>
              {({ isSelected }) => (
                <div className="cursor-pointer rounded-md border border-black px-3 py-2">
                  <div className="flex w-full justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className={`size-6 ${isSelected && 'fill-blue-600 text-blue-600'}`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </div>
                  <p>{item.label}</p>
                </div>
              )}
            </Radio.Item>
          ))}
        </Radio.List>
      </Radio>
    </form>
  )
}
