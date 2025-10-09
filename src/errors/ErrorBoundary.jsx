import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 text-red-600">
          <h2 className="text-xl font-semibold mb-2">Something went wrong.</h2>
          <p>{this.state.error?.message || "Unknown error."}</p>
        </div>
      );
    }
    return this.props.children;
  }
}