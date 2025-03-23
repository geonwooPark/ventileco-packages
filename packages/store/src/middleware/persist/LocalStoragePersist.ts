import { Store } from '../../core/Store'
import { BasePersistMiddleware } from './BasePersistMiddleware'

export class LocalStoragePersist<T> extends BasePersistMiddleware<T> {
  override apply(store: Store<T>): void {
    const savedState = window.localStorage.getItem(this.key)

    if (savedState) {
      store.setState(JSON.parse(savedState))
    }

    store.subscribe((state) =>
      window.localStorage.setItem(this.key, JSON.stringify(state)),
    )
  }
}
