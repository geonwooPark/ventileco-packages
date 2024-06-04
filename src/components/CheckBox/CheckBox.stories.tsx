import type { Meta } from '@storybook/react'
import CheckBoxGroup from './CheckBoxGroup'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

const meta: Meta<typeof CheckBoxGroup> = {
  title: 'COMPONENTS/CheckBox',
  component: CheckBoxGroup,
  parameters: {
    layout: 'centered',
  },
}

export default meta

export function Controlled() {
  const [values, setValues] = useState<(string | number)[]>([])

  return (
    <CheckBoxGroup defaultValues={values} setValues={setValues}>
      <CheckBoxGroup.Title>Controlled</CheckBoxGroup.Title>
      <CheckBoxGroup.List className="flex gap-2">
        <CheckBoxGroup.Item value="January">
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
        </CheckBoxGroup.Item>
        <CheckBoxGroup.Item value="February">
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
        </CheckBoxGroup.Item>
      </CheckBoxGroup.List>
    </CheckBoxGroup>
  )
}

export function WithReactHookForm() {
  const { register, handleSubmit } = useForm({
    defaultValues: { months: ['January'] },
  })

  const onSubmit = (data: any) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CheckBoxGroup defaultValues={['January']}>
        <CheckBoxGroup.Title>With React Hook Form</CheckBoxGroup.Title>
        <CheckBoxGroup.List className="flex gap-2">
          <CheckBoxGroup.Item value="January" register={register('months')}>
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
          </CheckBoxGroup.Item>
          <CheckBoxGroup.Item value="February" register={register('months')}>
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
          </CheckBoxGroup.Item>
        </CheckBoxGroup.List>
      </CheckBoxGroup>
    </form>
  )
}
