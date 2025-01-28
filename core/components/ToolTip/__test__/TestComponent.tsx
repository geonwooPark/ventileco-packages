import React from 'react'
import ToolTip from '../ToolTipMain'

export default function TestComponent() {
  return (
    <ToolTip direction="bottom">
      <ToolTip.Trigger>Trigger</ToolTip.Trigger>
      <ToolTip.Content>
        Content
        <ToolTip.Triangle />
      </ToolTip.Content>
    </ToolTip>
  )
}
