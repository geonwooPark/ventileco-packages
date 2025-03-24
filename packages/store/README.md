# ventileco-store

Ventileco Store is a lightweight global state management library. You can install it using the following command:

## Getting started

```bash
npm install ventileco-store
```

```bash
pnpm add ventileco-store
```

## Introduction

Ventileco Store provides efficient state management with a simple API and lightweight performance. It allows you to manage global state easily without the complexity of Redux. With a package size of less than 5KB, it ensures minimal impact on your application.

## Features

1. Lightweight: Manage global state with minimal code

2. Simple API: Intuitive and easy to use

3. TypeScript Support: Fully compatible with TypeScript

4. Works with React, Vanilla JS, ...: Usable across different environments

## Usage

```jsx
// Creating Stores (Recommended to Be Defined Once at the Root Level)

// Basic store
export const countStore = new Store(1)

// Object store
export const nameStore = new Store({ firstName: 'Geonwoo', lastName: 'Park' })

// Persisted store with session storage
export const primitiveStore = new Store(100, [
  new SessionStoragePersist('primitive'),
])

// Persisted store with local storage
export const objectStore = new Store({ isOpen: false, count: 200 }, [
  new LocalStoragePersist('object'),
])
```

```jsx
// Accessing store states
countStore.getState()

// Updating store states
countStore.setState((prev) => prev + 1)
```

```jsx
// Using a primitive store in a React component
const [value, setValue] = useStore(primitiveStore, (state) => state)

// Using an object store and selecting a specific property (count)
const [count, setCount] = useStore(objectStore, (state) => state.count)
```

> 🌷 <a  href='https://www.npmjs.com/package/ventileco-store'>NPM URL</a>
