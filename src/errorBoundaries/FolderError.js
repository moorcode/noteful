import React, { Component } from 'react';

export default class FolderError extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }
  static getDerivedStateFromError(error) {
    return { hasError: false };
  }
  render() {
    if (this.state.hasError) {
      return <h2>Sorry - the folders could not be displayed.</h2>;
    }
    return this.props.children;
  }
}
