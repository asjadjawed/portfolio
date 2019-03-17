import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Menu.scss";

import MenuButton from "../MenuButton/MenuButton";

export default class Menu extends Component {
  public state = {
    active: false
  };

  public render() {
    const { active } = this.state;

    return (
      <div className="Menu">
        <div
          className="Menu--button"
          onClick={() => this.setState({ active: !active })}
        >
          <MenuButton menuState={active} />
        </div>

        <div
          className={
            active ? "Menu--overlay Menu--overlay-active" : "Menu--overlay"
          }
        >
          <div
            className={
              active ? "Menu--branding Menu--branding-active" : "Menu--branding"
            }
          >
            <div className="Menu--portrait" />
          </div>
          <div className={active ? "Menu--nav Menu--nav-active" : "Menu--nav"}>
            <ul className="Menu--ul">
              <li className={active ? "Menu--li Menu--li-active" : "Menu--li"}>
                <NavLink
                  exact
                  to="/"
                  activeClassName="Menu--link-selected"
                  className="Menu--link"
                  onClick={() => this.setState({ active: false })}
                >
                  About Me
                </NavLink>
              </li>
              <li className={active ? "Menu--li Menu--li-active" : "Menu--li"}>
                <NavLink
                  to="/work"
                  activeClassName="Menu--link-selected"
                  className="Menu--link"
                  onClick={() => this.setState({ active: false })}
                >
                  My Work
                </NavLink>
              </li>
              <li className={active ? "Menu--li Menu--li-active" : "Menu--li"}>
                <NavLink
                  to="/skills"
                  activeClassName="Menu--link-selected"
                  className="Menu--link"
                  onClick={() => this.setState({ active: false })}
                >
                  My Skills
                </NavLink>
              </li>
              <li className={active ? "Menu--li Menu--li-active" : "Menu--li"}>
                <NavLink
                  to="/contact"
                  activeClassName="Menu--link-selected"
                  className="Menu--link"
                  onClick={() => this.setState({ active: false })}
                >
                  Contact Me
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
