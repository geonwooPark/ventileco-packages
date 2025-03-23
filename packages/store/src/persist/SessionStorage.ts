import { BaseStorage } from './BaseStorage'

export class SessionStorage extends BaseStorage {
  get<T>(key: string): T | null {
    const item = window.sessionStorage.getItem(key)
    return item ? JSON.parse(item) : null
  }

  set<T>(key: string, value: T): void {
    window.sessionStorage.setItem(key, JSON.stringify(value))
  }

  remove(key: string) {
    window.sessionStorage.removeItem(key)
  }

  clear(): void {
    window.sessionStorage.clear()
  }
}
