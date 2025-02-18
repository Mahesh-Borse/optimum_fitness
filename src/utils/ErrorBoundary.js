import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        // Update state to indicate an error has been encountered
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Log the error to an error reporting service
        console.log("Error logged: ", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // Fallback UI in case of an error
            return <h2>Something went wrong. Please try again later.</h2>;
        }

        // If there's no error, render the children components
        return this.props.children;
    }
}

export default ErrorBoundary;
