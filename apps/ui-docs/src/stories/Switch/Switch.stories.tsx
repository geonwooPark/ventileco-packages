import React, { useState } from 'react'
import { Switch } from 'ventileco-ui'

export default {
  title: 'COMPONENTS/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
}

export function Normal() {
  const [value, setValue] = useState(false)

  return (
    <Switch
      value={value}
      onChange={setValue}
      marginInline={2}
      duration={300}
      className={`${value ? 'bg-blue-600' : 'bg-gray-200'} w-[40px] h-[24px] rounded-full`}
    >
      <Switch.Ball className="size-4 rounded-full bg-white" />
    </Switch>
  )
}
