import { Component } from 'react';

import './errorBoundaries.sass';

interface ErrorBoundariesProps {
  children: React.ReactNode;
}

interface ErrorBoundariesState {
  hasError: boolean;
}

class ErrorBoundaries extends Component<ErrorBoundariesProps, ErrorBoundariesState> {
  constructor(props: ErrorBoundariesProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by ErrorBoundary: ', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1 className="error">Something went wrong...</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundaries;
