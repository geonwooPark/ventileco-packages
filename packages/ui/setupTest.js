require('@testing-library/jest-dom')

beforeAll(() => {
  window.HTMLElement.prototype.scrollIntoView = jest.fn()
})
