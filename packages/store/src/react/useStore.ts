import React, { useSyncExternalStore } from 'react'
import { Store } from '../core/Store'

function useStore<T, U>(store: Store<T>, selector: (state: T) => U) {
  return [
    useSyncExternalStore(
      (callback) => store.subscribe(() => callback()),
      () => selector(store.getState()),
    ),
    store.setState.bind(store),
  ] as const
}

export { useStore }
