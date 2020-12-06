import React, { Component } from "react";
import ScreenWrapper from "components/ScreenWrapper";

class BaseScreen extends Component {
  state = {
    isLoading: true,
    isError: true,
  };

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     isLoading: false,
    // isError: true,
    //   })
    // }, 3000);
  }

  _renderBody = () => {
    return <h1>Data</h1>;
  };
  
  render() {
    return (
      <ScreenWrapper
        titleHeader="Khách hàng"
        showBack = {true}
        isLoading={this.state.isLoading}
        isError={this.state.isError}
        render={this._renderBody()}
      />
    );
  }
}

export default BaseScreen;
