/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from "react";
import logo from "../assets/logo.png";
import Search from "./Search";
import { Link } from "react-router-dom";
class MyNavBar extends Component {
  state = {
    searchVisible: false,
  };

  handleSearchClick = () => {
    this.setState({
      searchVisible: !this.state.searchVisible,
    });
  };

  render() {
    return (
      <div>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
          integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        <title>Epiflix</title>
        <div>
          <nav
            className="navbar navbar-expand-lg navbar-dark"
            style={{ backgroundColor: "#221f1f" }}
          >
            <a className="navbar-brand" href="#">
              <img src={logo} style={{ width: "100px", height: "55px" }} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <Link className="nav-link" to="/MyBody">
                  Home <span className="sr-only">(current)</span>
                </Link>

                <Link className="nav-link" to="/TvShows">
                  TV Shows
                </Link>
                <Link className="nav-link" to="/Movies">
                  Movies
                </Link>

                <Link className="nav-link" to="">
                  My List
                </Link>
              </ul>
              {/* Qua ho creato un input text che appare solo al click dell'icona search, o almeno è quello che spero di fare*/}
              <i
                className="fa fa-search icons"
                onClick={this.handleSearchClick}
              />
              {this.state.searchVisible && <Search />}

              <div id="kids">KIDS</div>
              <i className="fa fa-bell icons" />
              <i className="fa fa-user icons" />
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default MyNavBar;
