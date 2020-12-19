import React, { Component } from "react";
import Loading from "./Loading";
import ScreenError from "./ScreenError";

export default class ScreenWrapper extends Component {
  render() {
    const {
      titleHeader,
      isLoading,
      isError,
      isEmpty,
      back,
      renderHeader,
      renderFooter,
      paging,
    } = this.props;

    // {activePage, action, totalItemsCount, itemCountPerPage }

    if (isLoading)
      return (
        <div className="content-wrapper">
          {/* {titleHeader && (
            <div className="content-header">
              <div className="container-fluid">
                <h1 className="m-0 text-dark">{titleHeader}</h1>
              </div>
            </div>
          )} */}
          <Loading />
        </div>
      );

    if (isError) {
      return <ScreenError />;
    }

    return (
      <div className="content-wrapper">
        {/* header */}
        {titleHeader && (
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0 text-dark">{titleHeader}</h1>
                </div>
              </div>
            </div>
          </div>
        )}
        <section className="content">
          <div class="container-fluid">{this.props.children}</div>
        </section>
      </div>
    );
  }
}
