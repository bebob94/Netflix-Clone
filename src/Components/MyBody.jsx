/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import MyCards from "./MyCards";

class MyBody extends Component {
  render() {
    return (
      <div className="container-fluid px-4">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h2 className="mb-4">TV Shows</h2>
            <Dropdown>
              <Dropdown.Toggle
                className="btn btn-secondary btn-sm dropdown-toggle rounded-0 m-2"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ backgroundColor: "#221f1f" }}
              >
                Geners
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ backgroundColor: "#221f1f" }}>
                <Dropdown.Item
                  className="dropdown-item text-white bg-dark"
                  href="#"
                >
                  Commedy
                </Dropdown.Item>
                <Dropdown.Item
                  className="dropdown-item text-white bg-dark"
                  href="#"
                >
                  Drama
                </Dropdown.Item>
                <Dropdown.Item
                  className="dropdown-item text-white bg-dark"
                  href="#"
                >
                  Thriller
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            <i className="fa fa-th-large icons" />
            <i className="fa fa-th icons" />
          </div>
        </div>
        <h4>Vikings</h4>
        <MyCards title={"vikings"} />
        <h4>The office</h4>
        <MyCards title={"the office"} />
        <h4>Breaking Bad</h4>
        <MyCards title={"breaking bad"} />
      </div>
    );
  }
}
export default MyBody;
