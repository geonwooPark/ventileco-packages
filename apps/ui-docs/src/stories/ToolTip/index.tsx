import React from 'react'
import { ToolTip as VToolTip } from 'ventileco-ui'

export default function ToolTip() {
  return (
    <VToolTip direction="bottom">
      <VToolTip.Trigger>
        <div className="rounded-md bg-gray-800 px-2 py-1 text-white">
          Trigger
        </div>
      </VToolTip.Trigger>
      <VToolTip.Content>
        <div className="rounded-md bg-black px-3 py-5 text-white shadow-md">
          Content
        </div>
        <VToolTip.Triangle className="size-2.5 bg-black" />
      </VToolTip.Content>
    </VToolTip>
  )
}
