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
            <div className="trigger">top</div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="tool-tip-component">툴팁</div>
          </ToolTip.Content>
        </ToolTip>
        <ToolTip direction="topLeft">
          <ToolTip.Trigger>
            <div className="trigger">topLeft</div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="tool-tip-component">툴팁</div>
          </ToolTip.Content>
        </ToolTip>
        <ToolTip direction="topRight">
          <ToolTip.Trigger>
            <div className="trigger">topRight</div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="tool-tip-component">툴팁</div>
          </ToolTip.Content>
        </ToolTip>
        <ToolTip direction="bottom">
          <ToolTip.Trigger>
            <div className="trigger">bottom</div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="tool-tip-component">툴팁</div>
          </ToolTip.Content>
        </ToolTip>
        <ToolTip direction="bottomLeft">
          <ToolTip.Trigger>
            <div className="trigger">bottomLeft</div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="tool-tip-component">툴팁</div>
          </ToolTip.Content>
        </ToolTip>
        <ToolTip direction="bottomRight">
          <ToolTip.Trigger>
            <div className="trigger">bottomRight</div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="tool-tip-component">툴팁</div>
          </ToolTip.Content>
        </ToolTip>
      </div>
      <div style={{ display: 'flex', gap: '32px' }}>
        <ToolTip direction="left">
          <ToolTip.Trigger>
            <div className="trigger">left</div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="tool-tip-component">툴팁</div>
          </ToolTip.Content>
        </ToolTip>
        <ToolTip direction="leftTop">
          <ToolTip.Trigger>
            <div className="trigger">leftTop</div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="tool-tip-component">툴팁</div>
          </ToolTip.Content>
        </ToolTip>
        <ToolTip direction="leftBottom">
          <ToolTip.Trigger>
            <div className="trigger">leftBottom</div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="tool-tip-component">툴팁</div>
          </ToolTip.Content>
        </ToolTip>
        <ToolTip direction="right">
          <ToolTip.Trigger>
            <div className="trigger">right</div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="tool-tip-component">툴팁</div>
          </ToolTip.Content>
        </ToolTip>
        <ToolTip direction="rightTop">
          <ToolTip.Trigger>
            <div className="trigger">rightTop</div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="tool-tip-component">툴팁</div>
          </ToolTip.Content>
        </ToolTip>
        <ToolTip direction="rightBottom">
          <ToolTip.Trigger>
            <div className="trigger">rightBottom</div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="tool-tip-component">툴팁</div>
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
            <div className="trigger">enterDelay</div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="tool-tip-component">툴팁</div>
          </ToolTip.Content>
        </ToolTip>
        <ToolTip direction="leftTop" leaveDelay={1000}>
          <ToolTip.Trigger>
            <div className="trigger">leaveDelay</div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="tool-tip-component">툴팁</div>
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
          className="trigger"
          onClick={() => setIsOpen((prev) => !prev)}
          style={{ backgroundColor: 'darkgray' }}
        >
          {isOpen ? 'Disabled' : 'Enabled'}
        </button>
        <ToolTip direction="top" disabled={isOpen}>
          <ToolTip.Trigger>
            <div className="trigger">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              asperiores atque
            </div>
          </ToolTip.Trigger>
          <ToolTip.Content>
            <div className="tool-tip-component" style={{ maxWidth: '240px' }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              asperiores atque
            </div>
          </ToolTip.Content>
        </ToolTip>
      </div>
    </div>
  )
}
