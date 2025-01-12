import { createContext as reactCreateContext, useContext } from 'react'

export function createContext<T>(useHook: () => T) {
  const Context = reactCreateContext<T | null>(null)

  function Provider({ children }: { children: React.ReactNode }) {
    return <Context.Provider value={useHook()}>{children}</Context.Provider>
  }

  function useContextValue() {
    const context = useContext(Context)

    if (context === null) {
      throw new Error('useContextValue must be used within its Provider')
    }

    return context
  }

  return [Provider, useContextValue] as const
}
