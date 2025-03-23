import { Observable } from './Observable'
import { shallowEqual } from '../utils/shallowEqual'
import { BaseMiddleware } from '../middleware/BaseMiddleware'

export class Store<T> extends Observable<T> {
  protected state: T
  private middlewares?: BaseMiddleware<T>[] = []

  constructor(initialState: T, middlewares?: BaseMiddleware<T>[]) {
    super()

    this.state = initialState

    this.middlewares = middlewares

    this.middlewares?.forEach((middleware) => middleware.apply(this))
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
  }
}
