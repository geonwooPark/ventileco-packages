import React, { forwardRef, InputHTMLAttributes, useMemo } from 'react'

export interface InputBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  inputClassName?: string
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

export default forwardRef<HTMLInputElement, InputBoxProps>(function InputBox(
  { startIcon, endIcon, inputClassName, className, onClick, ...otherProps },
  ref,
) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    if (onClick) {
      onClick(e)
    }
  }

  const inputContainerStyle = useMemo<React.CSSProperties>(
    () => ({
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
    }),
    [],
  )

  const inputStyle = useMemo<React.CSSProperties>(
    () => ({
      width: '100%',
      height: '100%',
      backgroundColor: 'transparent',
      outline: 'none',
    }),
    [],
  )

  return (
    <div onClick={handleClick} className={className}>
      <div style={inputContainerStyle}>
        {startIcon}
        <input
          ref={ref}
          style={inputStyle}
          className={inputClassName}
          {...otherProps}
        />
        {endIcon}
      </div>
    </div>
  )
})
