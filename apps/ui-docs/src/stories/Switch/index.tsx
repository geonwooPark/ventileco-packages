import React, { useState } from 'react'
import { Switch as VSwitch } from 'ventileco-ui'

export default function Switch() {
  const [value, setValue] = useState(false)

  return (
    <VSwitch
      value={value}
      onChange={setValue}
      marginInline={2}
      duration={300}
      className="w-[40px] h-[24px] bg-gray-800 rounded-full"
    >
      <VSwitch.Ball className="size-4 rounded-full bg-white" />
    </VSwitch>
  )
}
