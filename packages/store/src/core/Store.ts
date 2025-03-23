import { Observable } from './Observable'
import { shallowEqual } from '../utils/shallowEqual'
import { LocalStorage } from '../persist/LocalStorage'
import { SessionStorage } from '../persist/SessionStorage'
import { BaseStorage } from '../persist/BaseStorage'

export class Store<T> extends Observable<T> {
  protected state: T
  private storage: BaseStorage | null
  private persistKey: string

  constructor(
    initialState: T,
    persist?: 'localStorage' | 'sessionStorage',
    persistKey?: string,
  ) {
    super()
    this.state = initialState
    this.storage =
      persist === 'localStorage'
        ? new LocalStorage()
        : persist === 'sessionStorage'
          ? new SessionStorage()
          : null
    this.persistKey = persistKey || 'store-' + this.constructor.name

    if (this.storage) {
      const storageState = this.storage.get<T>(this.persistKey)
      if (storageState) {
        this.state = storageState
      }
    }
  }

  getState(): T {
    return this.state
  }

  setState(updater: T | ((prevState: T) => T)): void {
    const newState =
      typeof updater === 'function'
        ? (updater as (prevState: T) => T)(this.state)
        : updater

    if (!shallowEqual(newState, this.state)) {
      this.state =
        typeof newState === 'object'
          ? Object.assign({}, this.state, newState)
          : newState
      this.notify(newState)
    }

    // persist
    if (this.storage) {
      this.storage.set(this.persistKey, newState)
    }
  }
}
