import React, { useState } from 'react'
import ToolTip from './ToolTip'

export default {
  title: 'COMPONENTS/ToolTip',
  component: ToolTip,
}

export function Direction() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '32px',
      }}
    >
      <div style={{ display: 'flex', gap: '32px' }}>
        <ToolTip direction="top">
          <ToolTip.Trigger>
            <div className="rounded-md bg-gray-800 px-2 py-1 text-white">
              top
            </div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="rounded-md bg-black px-3 py-5 text-white shadow-md">
              ToolTip
            </div>
          </ToolTip.Content>
        </ToolTip>
        <ToolTip direction="topLeft">
          <ToolTip.Trigger>
            <div className="rounded-md bg-gray-800 px-2 py-1 text-white">
              topLeft
            </div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="rounded-md bg-black px-3 py-5 text-white shadow-md">
              ToolTip
            </div>
          </ToolTip.Content>
        </ToolTip>
        <ToolTip direction="topRight">
          <ToolTip.Trigger>
            <div className="rounded-md bg-gray-800 px-2 py-1 text-white">
              topRight
            </div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="rounded-md bg-black px-3 py-5 text-white shadow-md">
              ToolTip
            </div>
          </ToolTip.Content>
        </ToolTip>
        <ToolTip direction="bottom">
          <ToolTip.Trigger>
            <div className="rounded-md bg-gray-800 px-2 py-1 text-white">
              bottom
            </div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="rounded-md bg-black px-3 py-5 text-white shadow-md">
              ToolTip
            </div>
          </ToolTip.Content>
        </ToolTip>
        <ToolTip direction="bottomLeft">
          <ToolTip.Trigger>
            <div className="rounded-md bg-gray-800 px-2 py-1 text-white">
              bottomLeft
            </div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="rounded-md bg-black px-3 py-5 text-white shadow-md">
              ToolTip
            </div>
          </ToolTip.Content>
        </ToolTip>
        <ToolTip direction="bottomRight">
          <ToolTip.Trigger>
            <div className="rounded-md bg-gray-800 px-2 py-1 text-white">
              bottomRight
            </div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="rounded-md bg-black px-3 py-5 text-white shadow-md">
              ToolTip
            </div>
          </ToolTip.Content>
        </ToolTip>
      </div>
      <div style={{ display: 'flex', gap: '32px' }}>
        <ToolTip direction="left">
          <ToolTip.Trigger>
            <div className="rounded-md bg-gray-800 px-2 py-1 text-white">
              left
            </div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="rounded-md bg-black px-3 py-5 text-white shadow-md">
              ToolTip
            </div>
          </ToolTip.Content>
        </ToolTip>
        <ToolTip direction="leftTop">
          <ToolTip.Trigger>
            <div className="rounded-md bg-gray-800 px-2 py-1 text-white">
              leftTop
            </div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="rounded-md bg-black px-3 py-5 text-white shadow-md">
              ToolTip
            </div>
          </ToolTip.Content>
        </ToolTip>
        <ToolTip direction="leftBottom">
          <ToolTip.Trigger>
            <div className="rounded-md bg-gray-800 px-2 py-1 text-white">
              leftBottom
            </div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="rounded-md bg-black px-3 py-5 text-white shadow-md">
              ToolTip
            </div>
          </ToolTip.Content>
        </ToolTip>
        <ToolTip direction="right">
          <ToolTip.Trigger>
            <div className="rounded-md bg-gray-800 px-2 py-1 text-white">
              right
            </div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="rounded-md bg-black px-3 py-5 text-white shadow-md">
              ToolTip
            </div>
          </ToolTip.Content>
        </ToolTip>
        <ToolTip direction="rightTop">
          <ToolTip.Trigger>
            <div className="rounded-md bg-gray-800 px-2 py-1 text-white">
              rightTop
            </div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="rounded-md bg-black px-3 py-5 text-white shadow-md">
              ToolTip
            </div>
          </ToolTip.Content>
        </ToolTip>
        <ToolTip direction="rightBottom">
          <ToolTip.Trigger>
            <div className="rounded-md bg-gray-800 px-2 py-1 text-white">
              rightBottom
            </div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="rounded-md bg-black px-3 py-5 text-white shadow-md">
              ToolTip
            </div>
          </ToolTip.Content>
        </ToolTip>
      </div>
    </div>
  )
}

export function Delay() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '32px',
      }}
    >
      <div style={{ display: 'flex', gap: '32px', overflow: 'hidden' }}>
        <ToolTip direction="left" enterDelay={1000}>
          <ToolTip.Trigger>
            <div className="rounded-md bg-gray-800 px-2 py-1 text-white">
              enterDelay
            </div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="rounded-md bg-black px-3 py-5 text-white shadow-md">
              ToolTip
            </div>
          </ToolTip.Content>
        </ToolTip>
        <ToolTip direction="leftTop" leaveDelay={1000}>
          <ToolTip.Trigger>
            <div className="rounded-md bg-gray-800 px-2 py-1 text-white">
              leaveDelay
            </div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="rounded-md bg-black px-3 py-5 text-white shadow-md">
              ToolTip
            </div>
          </ToolTip.Content>
        </ToolTip>
      </div>
    </div>
  )
}

export function Disabled() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '32px',
      }}
    >
      <div style={{ display: 'flex', gap: '32px', overflow: 'hidden' }}>
        <button
          className="rounded-md bg-active p-1 text-white"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? 'Disabled' : 'Enabled'}
        </button>
        <ToolTip direction="top" disabled={isOpen}>
          <ToolTip.Trigger>
            <div className="rounded-md bg-gray-800 px-2 py-1 text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              asperiores atque
            </div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="max-w-[240px] rounded-md bg-black px-3 py-5 text-white shadow-md">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              asperiores atque
            </div>
          </ToolTip.Content>
        </ToolTip>
      </div>
    </div>
  )
}
