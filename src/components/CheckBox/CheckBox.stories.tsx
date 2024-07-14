import CheckBox from './CheckBoxMain'
import { useForm } from 'react-hook-form'
import { useRef, useState } from 'react'
import { checkBoxList } from '../../dummy'
import { Meta } from '@storybook/react'

export default {
  title: 'COMPONENTS/CheckBox',
  component: CheckBox,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    as: {
      description: 'div 또는 fieldset 중 하나를 선택합니다.',
      table: {
        type: { summary: 'div | fieldset' },
      },
    },
    ref: {
      description: '컴포넌트의 인스턴스에 직접 접근하는 방법을 제공합니다.',
      table: {
        type: {
          summary: 'RefObject<HTMLDivElement> | RefObject<HTMLFieldSetElement>',
        },
      },
    },
    children: {
      description: '자식 요소들을 포함합니다.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    defaultValues: {
      description: '기본 값들을 설정합니다.',
      table: {
        type: { summary: '(string | number)[]' },
      },
    },
    setValues: {
      description: '값들을 설정하는 함수입니다.',
      table: {
        type: {
          summary: 'Dispatch<React.SetStateAction<(string | number)[]>>',
        },
      },
    },
    value: {
      description: '아이템이 가지는 고유한 값입니다.',
      table: {
        type: { summary: 'string | number' },
        category: 'CheckBox.Item',
      },
    },
    register: {
      description: 'React Hook Form을 사용하기 위한 register를 등록합니다.',
      table: {
        type: { summary: 'any' },
        category: 'CheckBox.Item',
      },
    },
  },
} as Meta

export function Controlled() {
  const [values, setValues] = useState<(string | number)[]>([])

  const ref = useRef<HTMLDivElement>(null)

  return (
    <CheckBox defaultValues={values} setValues={setValues} ref={ref}>
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
  )
}

export function WithReactHookForm() {
  const { register, handleSubmit } = useForm({
    defaultValues: { months: ['January'] },
  })

  const onSubmit = (data: any) => console.log(data)

  const checkBoxRegister = register('months', {
    required: 'You must select at least one',
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CheckBox as="fieldset" defaultValues={['January']}>
        <CheckBox.Title>With React Hook Form</CheckBox.Title>
        <CheckBox.List className="flex gap-2">
          {checkBoxList.map((item) => (
            <CheckBox.Item
              key={item.id}
              value={item.value}
              register={checkBoxRegister}
            >
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
    </form>
  )
}
