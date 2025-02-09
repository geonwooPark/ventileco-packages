import React, {
  cloneElement,
  isValidElement,
  memo,
  PropsWithChildren,
  useId,
  useMemo,
} from 'react'

export interface AccordionItemProps {
  value: number
  isActive?: boolean
  handleOpen?: (selectedItem: number) => void
  className?: string
}

function AccordionItem({
  children,
  isActive,
  value,
  handleOpen,
  className,
}: PropsWithChildren<AccordionItemProps>) {
  const id = useId()

  const childrenWithProps = useMemo(
    () =>
      React.Children.map(children, (child) => {
        if (
          isValidElement<{
            id: string
            isActive: boolean
            handleOpen: () => void
          }>(child)
        ) {
          return cloneElement(child, {
            id,
            isActive,
            handleOpen: () => handleOpen!(value),
          })
        }
        return child
      }),
    [id, value, isActive, handleOpen, children],
  )

  return <div className={className}>{childrenWithProps}</div>
}

export default memo(
  AccordionItem,
  (prev, next) => prev.isActive === next.isActive,
)
