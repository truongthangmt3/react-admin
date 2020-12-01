import React, { Component } from "react";
import ScreenComponent from "@components/ScreenComponent";

class BaseScreen extends Component {
  state = {
    isLoading: true,
    isError: false,
  };

  _renderBody = () => {
    return <h1>Data</h1>;
  };
  
  render() {
    return (
      <ScreenComponent
        titleHeader="Screen Mẫu"
        isLoading={this.state.isLoading}
        isError={this.state.isError}
        render={this._renderBody()}
      />
    );
  }
}

export default BaseScreen;
