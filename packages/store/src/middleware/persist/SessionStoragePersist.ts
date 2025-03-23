import { Store } from '../../core/Store'
import { BasePersistMiddleware } from './BasePersistMiddleware'

export class SessionStoragePersist<T> extends BasePersistMiddleware<T> {
  override apply(store: Store<T>): void {
    const savedState = window.sessionStorage.getItem(this.key)

    if (savedState) {
      store.setState(JSON.parse(savedState))
    }

    store.subscribe((state) =>
      window.sessionStorage.setItem(this.key, JSON.stringify(state)),
    )
  }
}
