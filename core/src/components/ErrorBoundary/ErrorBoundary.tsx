import { Component, ReactNode } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
  fallback: (props: { error: any; onReset: () => void }) => ReactNode
  onReset?: () => void
}

interface ErrorBoundaryState {
  hasError: boolean
  error: any
}

export type FallbackProps = { error: any; onReset: () => void }

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  handleReset = () => {
    console.log('handleReset called')

    if (this.props.onReset) {
      this.props.onReset()
    }

    this.setState({ hasError: false })
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback({
        error: this.state.error,
        onReset: this.handleReset,
      })
    }

    return this.props.children
  }
}
