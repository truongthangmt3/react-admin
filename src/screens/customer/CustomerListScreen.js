import React, { Component } from "react";
import ScreenWrapper from "components/ScreenWrapper";
import { connect } from "react-redux";
import { actions, increment } from "redux/reducers/customerSlice";
import { unwrapResult } from "@reduxjs/toolkit";

class CustomerListScreen extends Component {
  state = {
    isLoading: false,
    isError: false,
  };

  componentDidMount() {}

  _renderBody = () => {
    return (
      <>
        <h1>Data Redux</h1>
        <p>{JSON.stringify(this.props.data.customerReducer)}</p>
        <button
          onClick={async (e) => {
            console.log("onclick");
            const res = await this.props.increment();
            alert(JSON.stringify(res));
          }}
        >
          Increment
        </button>

        <div className="row">
          <div className="col-md-3 col-sm-6 col-12">
            <div className="info-box bg-info">
              <span className="info-box-icon">
                <i className="far fa-bookmark" />
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Bookmarks</span>
                <span className="info-box-number">41,410</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "70%" }} />
                </div>
                <span className="progress-description">
                  70% Increase in 30 Days
                </span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
          </div>
          {/* /.col */}
          <div className="col-md-3 col-sm-6 col-12">
            <div className="info-box bg-success">
              <span className="info-box-icon">
                <i className="far fa-thumbs-up" />
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Likes</span>
                <span className="info-box-number">41,410</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "70%" }} />
                </div>
                <span className="progress-description">
                  70% Increase in 30 Days
                </span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
          </div>
          {/* /.col */}
          <div className="col-md-3 col-sm-6 col-12">
            <div className="info-box bg-warning">
              <span className="info-box-icon">
                <i className="far fa-calendar-alt" />
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Events</span>
                <span className="info-box-number">41,410</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "70%" }} />
                </div>
                <span className="progress-description">
                  70% Increase in 30 Days
                </span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
          </div>
          {/* /.col */}
          <div className="col-md-3 col-sm-6 col-12">
            <div className="info-box bg-danger">
              <span className="info-box-icon">
                <i className="fas fa-comments" />
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Comments</span>
                <span className="info-box-number">41,410</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "70%" }} />
                </div>
                <span className="progress-description">
                  70% Increase in 30 Days
                </span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
          </div>
          {/* /.col */}
        </div>

        <div className="row">
          <div className="col-md-3 col-sm-6 col-12">
            <div className="info-box">
              <span className="info-box-icon bg-info">
                <i className="far fa-envelope" />
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Messages</span>
                <span className="info-box-number">1,410</span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
          </div>
          {/* /.col */}
          <div className="col-md-3 col-sm-6 col-12">
            <div className="info-box">
              <span className="info-box-icon bg-success">
                <i className="far fa-flag" />
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Bookmarks</span>
                <span className="info-box-number">410</span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
          </div>
          {/* /.col */}
          <div className="col-md-3 col-sm-6 col-12">
            <div className="info-box">
              <span className="info-box-icon bg-warning">
                <i className="far fa-copy" />
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Uploads</span>
                <span className="info-box-number">13,648</span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
          </div>
          {/* /.col */}
          <div className="col-md-3 col-sm-6 col-12">
            <div className="info-box">
              <span className="info-box-icon bg-danger">
                <i className="far fa-star" />
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Likes</span>
                <span className="info-box-number">93,139</span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
          </div>
          {/* /.col */}
        </div>
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
