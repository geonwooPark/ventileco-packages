import type { Meta } from '@storybook/react'
import { useRef, useState } from 'react'
import RadioGroup from './RadioGroup'

const meta: Meta<typeof RadioGroup> = {
  title: 'COMPONENTS/Radio',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
}

export default meta

export function Uncontrolled() {
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <RadioGroup name="Uncontrolled" defaultValue={'number3'}>
        <RadioGroup.Title>비제어 컴포넌트</RadioGroup.Title>
        <RadioGroup.RadioList className="flex gap-4">
          <RadioGroup.RadioButton id="0" value={'number1'}>
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
          </RadioGroup.RadioButton>

          <RadioGroup.RadioButton id="1" value={'number2'}>
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
          </RadioGroup.RadioButton>

          <RadioGroup.RadioButton id="2" value={'number3'}>
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
          </RadioGroup.RadioButton>
        </RadioGroup.RadioList>
      </RadioGroup>
    </form>
  )
}

export function Controlled() {
  const [value, setValue] = useState<
    string | number | readonly string[] | undefined
  >()

  return (
    <div className="w-[240px]">
      <RadioGroup defaultValue={value} setValue={setValue} name="Controlled">
        <RadioGroup.Title>제어 컴포넌트</RadioGroup.Title>
        <RadioGroup.RadioList className="space-y-2">
          <RadioGroup.RadioButton id="4" value={'number5'}>
            {({ isSelected }) => (
              <div className="flex w-full cursor-pointer justify-between rounded-md border border-black px-4 py-3">
                <p>기호1</p>
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
            )}
          </RadioGroup.RadioButton>

          <RadioGroup.RadioButton id="5" value={'number6'}>
            {({ isSelected }) => (
              <div className="flex w-full cursor-pointer justify-between rounded-md border border-black px-4 py-3">
                <p>기호2</p>
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
            )}
          </RadioGroup.RadioButton>

          <RadioGroup.RadioButton id="6" value={'number7'}>
            {({ isSelected }) => (
              <div className="flex w-full cursor-pointer justify-between rounded-md border border-black px-4 py-3">
                <p>기호3</p>
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
            )}
          </RadioGroup.RadioButton>
        </RadioGroup.RadioList>
      </RadioGroup>
    </div>
  )
}
