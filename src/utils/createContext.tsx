import { createContext as _createContext, useContext } from 'react'

export const createContext = <T, V>(useValue: (init?: T) => V) => {
  const Context = _createContext<V | null>(null)

  const Provider = ({
    initialValue,
    children,
  }: {
    initialValue?: T
    children: React.ReactNode
  }) => (
    <Context.Provider value={useValue(initialValue)}>
      {children}
    </Context.Provider>
  )

  const useContextState = () => {
    const value = useContext(Context)

    if (value === null) throw new Error('Provider missing')

    return value
  }

  return [Provider, useContextState] as const
}
