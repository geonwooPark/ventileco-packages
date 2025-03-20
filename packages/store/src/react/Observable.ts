export class Observable<T> {
  private callbacks: Set<(state: T) => void> = new Set()

  subscribe(callback: (state: T) => void) {
    this.callbacks.add(callback)

    return () => {
      this.callbacks.delete(callback)
    }
  }

  notify(state: T) {
    this.callbacks.forEach((cb) => cb(state))
  }
}
