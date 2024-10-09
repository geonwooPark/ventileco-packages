import React, { ChangeEvent, useId, useRef, useState } from 'react'
import { CustomFile } from '../../types'
import { fileToPreviewImage } from '../../utils/fileToPreviewImage'

interface FileUploaderProps {
  children: (props: { isDragOver: boolean }) => React.ReactNode
  className?: string
  value: CustomFile[]
  onChange: (files: CustomFile[]) => void
  onBlur?: React.FocusEventHandler<HTMLLabelElement>
  onError?: (error: Error) => void
  accept?: string
  size?: number
  limit?: number
}

export default function FileUploader({
  children,
  className,
  value,
  onChange,
  onBlur,
  onError,
  accept,
  size,
  limit,
}: FileUploaderProps) {
  const multiple = limit !== 1

  const id = useId()

  const [isDragOver, setDragOver] = useState(false)

  const dropOverRef = useRef<HTMLLabelElement>(null)

  const onDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault()
    e.stopPropagation()

    setDragOver(true)
  }

  const onDragLeave = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault()
    e.stopPropagation()

    setDragOver(false)
  }

  const onDragDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault()
    e.stopPropagation()

    if (e.dataTransfer) {
      const files = e.dataTransfer.files
      if (!files) return

      handleFile(files)
      setDragOver(false)
    }
  }

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target
    if (!files) return

    handleFile(files)
  }

  const handleFile = (files: FileList) => {
    try {
      if (multiple) {
        if (limit && limit < value.length + files.length) {
          throw new Error(`파일 갯수는 최대 ${limit}개까지 가능합니다.`)
        }
      } else {
        if (limit && limit < files.length) {
          throw new Error(`파일 갯수는 최대 ${limit}개까지 가능합니다.`)
        }
      }

      const urls = fileToPreviewImage(files, accept, size)

      if (multiple) {
        onChange([...(value || []), ...urls])
      } else {
        onChange([...urls])
      }
    } catch (error) {
      if (error instanceof Error) {
        if (onError) {
          onError(error)
        } else {
          console.error(error.message)
        }
      }
    }
  }

  return (
    <label
      htmlFor={`${id}-file-uploader`}
      tabIndex={0}
      ref={dropOverRef}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDragDrop}
      onBlur={onBlur}
      className={className}
    >
      {children({ isDragOver })}
      <input
        type="file"
        id={`${id}-file-uploader`}
        className="hidden"
        onChange={onFileChange}
        multiple={multiple}
        data-testid="file-input"
      />
    </label>
  )
}
