import React, { Component } from "react";
import Loading from "./Loading";
import ScreenError from "./ScreenError";

export default class ScreenWrapper extends Component {
  // renderBody() {
  //   const { isLoading, isError, reload, children, showBackground, back, renderViewHeader } = this.props;
  //   const marginTop = showBackground
  //     ? statusBarHeight + (Platform.OS == 'ios' ? (isIPhoneX() ? (!back || renderViewHeader ? 10 : 5) : 30) : 65)`
  //     : 0;
  //   if (isLoading) return <Loading />;
  //   if (isError) return <Error reload={reload} />;
  //   return <View style={{ flex: 1, marginTop: marginTop }} children={children} />;
  // }

  render() {
    const {
      titleHeader,
      isLoading,
      isError,
      isEmpty,
      back,
      renderHeader,
      renderFooter,
      children,
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
        {children}
      </div>
    );
  }
}
