import { Store } from '../../core/Store'
import { BaseMiddleware } from '../BaseMiddleware'

export abstract class BasePersistMiddleware<T> extends BaseMiddleware<T> {
  key: string

  constructor(key: string) {
    super()

    this.key = key
  }

  abstract override apply(store: Store<T>): void
}
