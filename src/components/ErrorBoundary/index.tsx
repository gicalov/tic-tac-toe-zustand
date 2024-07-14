import { Component, ErrorInfo, ReactNode } from "react";
import { Typography } from "antd";
import { ErrorBoundaryState, ErrorBoundaryProps } from "./interfaces";

const { Title } = Typography;

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error(error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return <Title>Что-то пошло не так.</Title>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
