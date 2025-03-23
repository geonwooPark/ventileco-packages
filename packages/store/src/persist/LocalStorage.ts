import { BaseStorage } from './BaseStorage'

export class LocalStorage extends BaseStorage {
  get<T>(key: string): T | null {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : null
  }

  set<T>(key: string, value: T): void {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  remove(key: string) {
    window.localStorage.removeItem(key)
  }

  clear(): void {
    window.localStorage.clear()
  }
}
