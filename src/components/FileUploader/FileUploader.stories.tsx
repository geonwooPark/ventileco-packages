import { useState } from 'react'
import { Meta } from '@storybook/react'
import FileUploader from './FileUploader'
import { CustomFile } from '../../types'

export default {
  title: 'COMPONENTS/FileUploader',
  component: FileUploader,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: {
      description: '업로드된 파일 목록입니다.',
      table: {
        type: {
          summary: 'CustomFile[]',
        },
      },
    },
    onChange: {
      description: '파일이 변경될 때 호출되는 콜백 함수입니다.',
      table: {
        type: { summary: '(files: CustomFile[]) => void' },
      },
    },
    onBlur: {
      description: '포커스를 잃었을 때 호출되는 콜백 함수입니다.',
      table: {
        type: { summary: 'React.FocusEventHandler<HTMLLabelElement>' },
      },
    },
    accept: {
      description: '허용되는 파일 확장자 타입을 ,로 구분하여 지정합니다.',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    size: {
      description: '허용되는 파일의 최대 크기 (bytes 단위)를 지정합니다.',
      table: {
        type: { summary: 'number' },
      },
    },
    limit: {
      description: '허용되는 최대 파일 수를 지정합니다.',
      table: {
        type: { summary: 'number' },
      },
    },
  },
} as Meta

export function Normal() {
  const [value, setValue] = useState<CustomFile[]>([])

  const onChange = (files: CustomFile[]) => {
    setValue(files)
  }

  const onDelete = (e: React.MouseEvent, file: CustomFile) => {
    e.preventDefault()

    const fileteredList = value
      ? value.filter((r: CustomFile) => r !== file)
      : []

    onChange(fileteredList)
  }

  return (
    <>
      <FileUploader
        value={value}
        onChange={onChange}
        accept={'image/*'}
        limit={5}
        onError={(error) => console.log(error.message)}
      >
        {({ isDragOver }) => (
          <div
            className={`
              mx-auto flex h-[120px] w-[320px] cursor-pointer items-center justify-center gap-2 rounded-md border border-black px-4
              ${isDragOver && 'border-blue-400 bg-blue-100 text-blue-400 duration-200'}
            `}
          >
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
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <p className="text-body2">등록할 이미지를 선택하거나 올려주세요.</p>
          </div>
        )}
      </FileUploader>

      <ul className="mt-4 flex gap-2">
        {value &&
          value.map((file: CustomFile, idx: number) => (
            <li key={idx} className="relative">
              <img
                src={file.preview}
                alt={file.name}
                className="aspect-square size-full w-[80px] overflow-hidden rounded border"
              />
              <button
                onClick={(e) => onDelete(e, file)}
                className="absolute -right-2 -top-2 rounded-full border bg-white p-1 shadow-md duration-200 hover:bg-white/80"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </li>
          ))}
      </ul>
    </>
  )
}
