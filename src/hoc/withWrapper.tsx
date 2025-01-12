import React, { ReactNode } from 'react'

export default function withWrapper(
  Inner: React.ComponentType,
  wrappers: React.ComponentType<{ children: ReactNode }>[],
) {
  return function Wrapper() {
    return wrappers.reduceRight(
      (children, Wrap) => <Wrap>{children}</Wrap>,
      <Inner />,
    )
  }
}
