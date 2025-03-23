import { Store } from '../core/Store'

export abstract class BaseMiddleware<T> {
  abstract apply(store: Store<T>): void
}
