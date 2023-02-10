// import { Component } from "react";
import React, { Component } from "react";
class NewComponent extends Component {
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
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    body {\n      margin: 0;\n      background-color: #221f1f;\n    }\n\n    h2,\n    h4,\n    footer {\n      color: #f5f5f1;\n    }\n\n    .icons {\n      margin-left: 15px;\n      margin-right: 15px;\n      font-size: 18px;\n      color: #f5f5f1;\n    }\n\n    .navbar-nav {\n      font-size: 0.9em;\n    }\n\n    #kids {\n      color: #f5f5f1;\n      font-size: 0.8em;\n    }\n\n    .footer-icon {\n      font-size: 1.3em;\n      margin-left: 1%;\n      margin-right: 1%;\n      color: #838383;\n    }\n\n    .footer-links {\n      text-align: left;\n      font-size: 0.8em;\n    }\n\n    .footer-links p {\n      margin-top: 3%;\n      margin-bottom: 3%;\n      color: #838383;\n    }\n\n    .footer-links a {\n      color: #838383;\n    }\n\n    .footer-button {\n      color: #838383;\n      border-color: #838383;\n    }\n\n    .copyright {\n      color: #838383;\n      font-size: 0.6em;\n    }\n\n    .col img {\n      transition: transform 0.2s;\n    }\n\n    .col img:hover {\n      transform: scale(1.1);\n    }\n  ",
          }}
        />
        <title>Epiflix</title>
        <div>
          <nav
            className="navbar navbar-expand-lg navbar-dark"
            style={{ backgroundColor: "#221f1f" }}
          >
            <a className="navbar-brand" href="#">
              <img
                src="assets/logo.png"
                style={{ width: "100px", height: "55px" }}
              />
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
                <li className="nav-item">
                  <a className="nav-link font-weight-bold" href="#">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link font-weight-bold" href="#">
                    TV Shows
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link font-weight-bold" href="#">
                    Movies
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link font-weight-bold" href="#">
                    Recently Added
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link font-weight-bold" href="#">
                    My List
                  </a>
                </li>
              </ul>
              <i className="fa fa-search icons" />
              <div id="kids">KIDS</div>
              <i className="fa fa-bell icons" />
              <i className="fa fa-user icons" />
            </div>
          </nav>
          <div className="container-fluid px-4">
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <h2 className="mb-4">TV Shows</h2>
                <div className="dropdown ml-4 mt-1">
                  <button
                    className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{ backgroundColor: "#221f1f" }}
                  >
                    Genres &nbsp;
                  </button>
                  <div
                    className="dropdown-menu bg-dark"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item text-white bg-dark" href="#">
                      Comedy
                    </a>
                    <a className="dropdown-item text-white bg-dark" href="#">
                      Drama
                    </a>
                    <a className="dropdown-item text-white bg-dark" href="#">
                      Thriller
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <i className="fa fa-th-large icons" />
                <i className="fa fa-th icons" />
              </div>
            </div>
            <h4>Trending Now</h4>
            {/* <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">
              <div className="col mb-2 px-1">
                <img
                  className="img-fluid"
                  src="assets/1.png"
                  alt="movie picture"
                />
              </div>
              <div className="col mb-2 px-1">
                <img
                  className="img-fluid"
                  src="assets/2.png"
                  alt="movie picture"
                />
              </div>
              <div className="col mb-2 px-1">
                <img
                  className="img-fluid"
                  src="assets/3.png"
                  alt="movie picture"
                />
              </div>
              <div className="col mb-2 px-1">
                <img
                  className="img-fluid"
                  src="assets/4.png"
                  alt="movie picture"
                />
              </div>
              <div className="col mb-2 px-1">
                <img
                  className="img-fluid"
                  src="assets/5.png"
                  alt="movie picture"
                />
              </div>
              <div className="col mb-2 px-1">
                <img
                  className="img-fluid"
                  src="assets/6.png"
                  alt="movie picture"
                />
              </div>
            </div> */}
            <h4>Watch it Again</h4>
            {/* <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">
              <div className="col mb-2 px-1">
                <img
                  className="img-fluid"
                  src="assets/7.png"
                  alt="movie picture"
                />
              </div>
              <div className="col mb-2 px-1">
                <img
                  className="img-fluid"
                  src="assets/8.png"
                  alt="movie picture"
                />
              </div>
              <div className="col mb-2 px-1">
                <img
                  className="img-fluid"
                  src="assets/9.png"
                  alt="movie picture"
                />
              </div>
              <div className="col mb-2 px-1">
                <img
                  className="img-fluid"
                  src="assets/10.png"
                  alt="movie picture"
                />
              </div>
              <div className="col mb-2 px-1">
                <img
                  className="img-fluid"
                  src="assets/11.png"
                  alt="movie picture"
                />
              </div>
              <div className="col mb-2 px-1">
                <img
                  className="img-fluid"
                  src="assets/12.png"
                  alt="movie picture"
                />
              </div>
            </div> */}
            <h4>New Releases</h4>
            {/* <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">
              <div className="col mb-2 px-1">
                <img
                  className="img-fluid"
                  src="assets/13.png"
                  alt="movie picture"
                />
              </div>
              <div className="col mb-2 px-1">
                <img
                  className="img-fluid"
                  src="assets/14.png"
                  alt="movie picture"
                />
              </div>
              <div className="col mb-2 px-1">
                <img
                  className="img-fluid"
                  src="assets/15.png"
                  alt="movie picture"
                />
              </div>
              <div className="col mb-2 px-1">
                <img
                  className="img-fluid"
                  src="assets/16.png"
                  alt="movie picture"
                />
              </div>
              <div className="col mb-2 px-1">
                <img
                  className="img-fluid"
                  src="assets/17.png"
                  alt="movie picture"
                />
              </div>
              <div className="col mb-2 px-1">
                <img
                  className="img-fluid"
                  src="assets/18.png"
                  alt="movie picture"
                />
              </div>
            </div> */}
            <footer>
              <div className="row text-center mt-5">
                <div className="col-6 offset-3">
                  <div className="row">
                    <div className="col col-12 text-left mb-2">
                      <i className="fa fa-facebook footer-icon" />
                      <i className="fa fa-instagram footer-icon" />
                      <i className="fa fa-twitter footer-icon" />
                      <i className="fa fa-youtube footer-icon" />
                    </div>
                  </div>
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4">
                    <div className="col">
                      <div className="row">
                        <div className="col col-12 footer-links">
                          <p>
                            <a href="#" alt="footer link">
                              Audio and Subtitles
                            </a>
                          </p>
                          <p>
                            <a href="#" alt="footer link">
                              Media Center
                            </a>
                          </p>
                          <p>
                            <a href="#" alt="footer link">
                              Privacy
                            </a>
                          </p>
                          <p>
                            <a href="#" alt="footer link">
                              Contact us
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="row">
                        <div className="col col-12 footer-links">
                          <p>
                            <a href="#" alt="footer link">
                              Audio Description
                            </a>
                          </p>
                          <p>
                            <a href="#" alt="footer link">
                              Investor Relations
                            </a>
                          </p>
                          <p>
                            <a href="#" alt="footer link">
                              Legal Notices
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="row">
                        <div className="col col-12 footer-links">
                          <p>
                            <a href="#" alt="footer link">
                              Help Center
                            </a>
                          </p>
                          <p>
                            <a href="#" alt="footer link">
                              Jobs
                            </a>
                          </p>
                          <p>
                            <a href="#" alt="footer link">
                              Cookie Preferences
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="row">
                        <div className="col col-12 footer-links">
                          <p>
                            <a href="#" alt="footer link">
                              Gift Cards
                            </a>
                          </p>
                          <p>
                            <a href="#" alt="footer link">
                              Terms of Use
                            </a>
                          </p>
                          <p>
                            <a href="#" alt="footer link">
                              Corporate Information
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col col-12 text-left mb-2">
                      <button
                        type="button"
                        className="btn btn-sm footer-button rounded-0 mt-3"
                      >
                        Service Code
                      </button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col col-12 text-left mb-2 mt-2 copyright">
                      © 1997-2022 Netflix, Inc.
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default NewComponent;
