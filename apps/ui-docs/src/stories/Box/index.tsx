import React, { useRef } from 'react'
import { Box as VBox } from 'ventileco-ui'

export default function Box() {
  const anchorRef = useRef<HTMLAnchorElement>(null)

  return (
    <VBox
      as="a"
      target="_blank"
      ref={anchorRef}
      href="https://github.com/geonwooPark/ventileco-ui"
      className="inline-block rounded-md bg-green-600 px-8 py-4 text-base font-bold text-white transition-all duration-200 hover:opacity-80"
    >
      🍐 Pear
    </VBox>
  )
}
