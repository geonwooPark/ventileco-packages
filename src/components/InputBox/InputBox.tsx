import React, { forwardRef, InputHTMLAttributes, useMemo } from 'react'

interface InputBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  inputClassName?: string
}

export default forwardRef<HTMLInputElement, InputBoxProps>(function InputBox(
  { className, startIcon, endIcon, inputClassName, ...otherProps },
  ref,
) {
  const containerStyle = useMemo<React.CSSProperties>(
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
    <div className={className}>
      <div style={containerStyle}>
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
