export class Observable<T> {
  private callbacks: Set<(state: T) => void> = new Set()

  protected notify(state: T) {
    this.callbacks.forEach((cb) => cb(state))
  }

  subscribe(callback: (state: T) => void) {
    this.callbacks.add(callback)

    return () => {
      this.callbacks.delete(callback)
    }
  }
}
