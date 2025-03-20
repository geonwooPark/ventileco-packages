import { Observable } from '../react/Observable'

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

    // 상태를 전체를 교체할지? 일부만 변경할지?

    this.state = newState
    this.notify(newState)
  }
}
