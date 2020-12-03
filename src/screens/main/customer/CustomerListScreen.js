import React, { Component } from "react";
import ScreenWrapper from "@components/ScreenWrapper";
import { connect } from "react-redux";
import { actions, increment } from "@src/redux/reducers/customerSlice";

class CustomerListScreen extends Component {
  state = {
    isLoading: false,
    isError: false,
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
    return (
      <>
        <h1>Data Redux</h1>
        <p>{JSON.stringify(this.props.data.customerReducer)}</p>
        <button
          onClick={(e) => {
            console.log("onclick");
            this.props.increment();
          }}
        >
          Increment
        </button>
      </>
    );
  };

  render() {
    return (
      <ScreenWrapper
        titleHeader="Khách hàng"
        showBack={true}
        isLoading={this.state.isLoading}
        isError={this.state.isError}
        children={this._renderBody()}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  data: state,
});

const mapDispatchToProps = {
  increment,
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerListScreen);
