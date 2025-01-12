import { ReactNode, useState } from 'react'
import Component1 from './Component1'
import Component2 from './Component2'
import { createContext } from './utils/createContext'
import withWrapper from './hoc/withWrapper'

export const [Count1Provider, useCount1] = createContext(() => useState(10))
export const [Count2Provider, useCount2] = createContext(() => useState(20))
export const [Count3Provider, useCount3] = createContext(() => useState(30))
export const [Count4Provider, useCount4] = createContext(() => useState(40))
export const [Count5Provider, useCount5] = createContext(() => useState(50))

export default function App() {
  const providers = [
    [Count1Provider],
    [Count2Provider],
    [Count3Provider],
    [Count4Provider],
    [Count5Provider],
  ]

  const ProviderWrapper = withWrapper(
    () => (
      <>
        <Component1 />
        <Component2 />
      </>
    ),
    providers as any,
  )

  return <ProviderWrapper />
}
