import React, { Component } from "react";
import { NavLink, Link, useRouteMatch } from "react-router-dom";
import MockData from "constants/MockData.json";
import MenuItem from "./MenuItem.js";

class Menu extends Component {
  render() {
    return (
      <div>
        <aside className="main-sidebar elevation-4 sidebar-light-lightblue">
          {/* Brand Logo */}
          <a className="brand-link">
            <img
              src="/images/system/app_icon.png"
              alt="Applogo"
              className="brand-image img-circle elevation-4"
            />
            <span className="brand-text font-weight-light">WINDS ADMIN</span>
          </a>
          {/* Sidebar */}
          <div className="sidebar">
            {/* Sidebar user panel (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img
                  src="dist/img/user2-160x160.jpg"
                  // src="/images/system/img_avatar.jpg"
                  className="img-circle elevation-2"
                  alt="User Image"
                />
              </div>
              <div className="info">
                <a href="#" className="d-block">
                  Quản trị viên 1
                </a>
              </div>
            </div>
            {/* Sidebar Menu */}
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                <MenuItem data={MockData.menus} />
                
                <li className="nav-header">MISCELLANEOUS</li>

                <li className="nav-item">
                  <a href="https://adminlte.io/docs/3.0" className="nav-link">
                    <i className="nav-icon fas fa-file" />
                    <p>Documentation</p>
                  </a>
                </li>
              </ul>
            </nav>
            {/* /.sidebar-menu */}
          </div>
          {/* /.sidebar */}
        </aside>
      </div>
    );
  }
}
export default Menu;
