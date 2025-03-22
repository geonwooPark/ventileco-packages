import { Observable } from './Observable'
import { shallowEqual } from '../utils/shallowEqual'

export class Store<T> extends Observable<T> {
  protected state: T

  constructor(initialState: T) {
    super()
    this.state = initialState
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
      this.state = typeof newState === 'object' ? newState : newState
      this.notify(newState)
    }
  }
}
