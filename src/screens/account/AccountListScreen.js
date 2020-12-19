import React, { Component } from "react";
import ScreenWrapper from "components/ScreenWrapper";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import { login } from "redux/reducers/accountSlice";
import AccountApi from "network/AccountApi";
import InputField from 'components/InputField'
import MenuItem from 'components/MenuItem'

class AccountListScreen extends Component {
  state = {
    isLoading: false,
    isError: false,
  };

  componentDidMount() {
    // setTimeout(() => {
      this.props.login({
        username: "admin",
        password: "admin",
      });
    // }, 1500);
  }

  

  _renderBody = () => {
    return (
      <>
        <div className="card">
          <span>{JSON.stringify(this.props.data.data)}</span>
          <div className="card-header">
            <h3 className="card-title">Bordered Table</h3>
          </div>
          {/* /.card-header */}
          <div className="card-body">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th style={{ width: 10 }}>#</th>
                  <th>Task</th>
                  <th>Progress</th>
                  <th style={{ width: 40 }}>Label</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>Update software</td>
                  <td>
                    <div className="progress progress-xs">
                      <div
                        className="progress-bar progress-bar-danger"
                        style={{ width: "55%" }}
                      />
                    </div>
                  </td>
                  <td>
                    <span className="badge bg-danger">55%</span>
                  </td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>Clean database</td>
                  <td>
                    <div className="progress progress-xs">
                      <div
                        className="progress-bar bg-warning"
                        style={{ width: "70%" }}
                      />
                    </div>
                  </td>
                  <td>
                    <span className="badge bg-warning">70%</span>
                  </td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td>Cron job running</td>
                  <td>
                    <div className="progress progress-xs progress-striped active">
                      <div
                        className="progress-bar bg-primary"
                        style={{ width: "30%" }}
                      />
                    </div>
                  </td>
                  <td>
                    <span className="badge bg-primary">30%</span>
                  </td>
                </tr>
                <tr>
                  <td>4.</td>
                  <td>Fix and squish bugs</td>
                  <td>
                    <div className="progress progress-xs progress-striped active">
                      <div
                        className="progress-bar bg-success"
                        style={{ width: "90%" }}
                      />
                    </div>
                  </td>
                  <td>
                    <span className="badge bg-success">90%</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* /.card-body */}
          <div className="card-footer clearfix">
            <ul className="pagination pagination-sm m-0 float-right">
              <li className="page-item">
                <a className="page-link" href="#">
                  «
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  »
                </a>
              </li>
            </ul>


    
          </div>
          <div className="card-body">
          <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Nguyễn Trường</td>
              <td>Thăng</td>
              <td>@thangnt</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Nguyễn Chí</td>
              <td>Tùng</td>
              <td>@tungnc</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Nguyễn Thị Thanh</td>
              <td>Nga</td>
              <td>@ngantt</td>
            </tr>
          </tbody>
        </Table>

        </div>
        </div>

        
      </>
    );
  };

  render() {
    return (
      <ScreenWrapper
        titleHeader="Khách hàng"
        showBack={true}
        isLoading={this.props.data.isLoading}
        isError={this.props.data.isError}
        children={this._renderBody()}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.accountReducer,
});

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountListScreen);

// export default AccountListScreen;
