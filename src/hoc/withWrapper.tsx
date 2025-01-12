import React, { createElement } from 'react'

export default function withWrapper(
  Inner: React.ComponentType,
  wrappers: [React.ComponentType, object?][],
) {
  return function Wrapper() {
    return wrappers.reduceRight(
      (children, [Wrap, props = {}]) =>
        createElement(Wrap, { ...props }, children),
      <Inner />,
    )
  }
}
