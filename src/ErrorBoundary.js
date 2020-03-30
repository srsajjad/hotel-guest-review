import React from "react";

class ErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log("LOL ! Bug found, will be fixed soon I guess !");
  }

  render() {
    return this.props.children;
  }
}

export default ErrorBoundary;
