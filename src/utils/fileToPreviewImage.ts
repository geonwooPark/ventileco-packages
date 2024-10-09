import { CustomFile } from '../types'

export const fileToPreviewImage = (
  files: FileList,
  accept?: string,
  size?: number,
) => {
  const newAccept = addAcceptedExtensions(accept)

  const acceptedExtensions = newAccept
    ? new Set(newAccept.split(',').map((r) => r.trim().toLowerCase()))
    : new Set([])

  let data: CustomFile[] = []
  for (let i = 0; i < files.length; i++) {
    const file = files[i] as CustomFile

    // 파일 크기 검사
    if (size && size < file.size) {
      throw new Error(`파일 크기는 최대 ${size} bytes 이하만 가능합니다.`)
    }

    // 파일 확장자 검사
    const fileExtension = `.${file.name.split('.').pop()?.toLowerCase()}`
    if (accept && !acceptedExtensions.has(fileExtension)) {
      throw new Error(`허용되지 않는 파일 형식입니다: ${fileExtension}`)
    }

    const fileUrl = URL.createObjectURL(file)

    file.preview = fileUrl
    data = [...data, file]
  }

  return data
}

const addAcceptedExtensions = (accept?: string) => {
  if (!accept) return ''

  if (accept?.includes('image/*')) {
    accept += ', .jpg, .jpeg, .png, .gif, .bmp, .webp, .svg'
  }

  if (accept?.includes('video/*')) {
    accept += ', .mp4, .mov, .avi, .mkv, .webm, .flv'
  }

  if (accept?.includes('audio/*')) {
    accept += ', .mp3, .wav, .ogg, .aac, .flac'
  }

  return accept
}
