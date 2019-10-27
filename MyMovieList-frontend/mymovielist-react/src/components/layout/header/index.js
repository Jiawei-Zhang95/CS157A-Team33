import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
const noAction = e => e.preventDefault();

class Header extends Component {
  render() {
    const logIn = () => {
      return this.props.logIn;
    };
    const logOut = e => {
      e.preventDefault();
      this.props.logOutdata(null);
    };
    return (
      <Fragment>
        <div className={"menu=area menu1 " + this.props.class}>
          <div className="top-menu-area">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="menu-fullwidth">
                    <div className="logo-wrapper order-lg-0 order-sm-1">
                      <div className="logo logo-top">
                        <NavLink to="/">
                          <img
                            src={this.props.logo}
                            alt="logoImage"
                            className="img-fluid"
                          />
                        </NavLink>
                      </div>
                    </div>
                    {/*<!-- ends: .logo-wrapper -->*/}
                    <div className="menu-container order-lg-1 order-sm-0">
                      <div className="d_menu">
                        <nav className="navbar navbar-expand-lg mainmenu_menu">
                          <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#movielist-navbar-collapse"
                            aria-controls="movielist-navbar-collapse"
                            aria-expande="false"
                            aria-label="Toggle navigation"
                          ></button>
                          {/*<!-- Collect the nav links, forms, and other content for toggling -->*/}
                        </nav>
                      </div>
                    </div>
                    <div className="menu-right order-lg-2 order-sm-2">
                      <div className="search-wrapper">
                        <div class="nav_right_module search_module">
                          <span className="icon-left" id="basic-addon9">
                            <i className="la la-search"></i>
                          </span>
                          <div className="search_area">
                            <form action="/">
                              <div className="input-group input-group-light">
                                <input
                                  type="text"
                                  className="form-control search_field top-search-field"
                                  placeholder="What are you looking for"
                                  autoComplete="off"
                                ></input>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Header;
