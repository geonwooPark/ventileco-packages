import React, { useState } from 'react'
import Switch from '../SwitchMain'

export default function TestComponent() {
  const [value, setValue] = useState(false)

  return (
    <Switch value={value} onChange={setValue} marginInline={-4} duration={300}>
      <Switch.Ball />
    </Switch>
  )
}
