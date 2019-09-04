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
          className={
            active ? "Menu__button Menu__button--active" : "Menu__button"
          }
          onClick={() => this.setState({ active: !active })}
        >
          <div
            className={
              active ? "Menu__label Menu__label--active" : "Menu__label"
            }
          >
            Menu
          </div>
          <MenuButton menuState={active} />
        </div>

        <div
          className={
            active ? "Menu__overlay Menu__overlay--active" : "Menu__overlay"
          }
        >
          <div
            className={
              active
                ? "Menu__branding Menu__branding--active"
                : "Menu__branding"
            }
          >
            <h1 className="Menu__logo">
              Asjad <span className="Menu__text--secondaryColor">Jawed</span>
            </h1>

            <div>
              <a
                className="Menu__iconLink"
                href="https://twitter.com/asjadjawed"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="Menu__icon fab fa-twitter" />
              </a>

              <a
                className="Menu__iconLink"
                href="https://www.linkedin.com/in/asjadjawed"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="Menu__icon fab fa-linkedin-in" />
              </a>

              <a
                className="Menu__iconLink"
                href="https://github.com/asjadjawed"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="Menu__icon fab fa-github" />
              </a>
            </div>
          </div>
          <div className={active ? "Menu__nav Menu__nav--active" : "Menu__nav"}>
            <ul className="Menu__ul">
              <li className={active ? "Menu__li Menu__li--active" : "Menu__li"}>
                <NavLink
                  exact
                  to="/"
                  activeClassName="Menu__link--selected"
                  className="Menu__link"
                  onClick={() => this.setState({ active: false })}
                >
                  Home
                </NavLink>
              </li>
              <li className={active ? "Menu__li Menu__li--active" : "Menu__li"}>
                <NavLink
                  to="/about"
                  activeClassName="Menu__link--selected"
                  className="Menu__link"
                  onClick={() => this.setState({ active: false })}
                >
                  About Me
                </NavLink>
              </li>
              <li className={active ? "Menu__li Menu__li--active" : "Menu__li"}>
                <NavLink
                  to="/skills"
                  activeClassName="Menu__link--selected"
                  className="Menu__link"
                  onClick={() => this.setState({ active: false })}
                >
                  Services & Tech
                </NavLink>
              </li>
              <li className={active ? "Menu__li Menu__li--active" : "Menu__li"}>
                <NavLink
                  to="/work"
                  activeClassName="Menu__link--selected"
                  className="Menu__link"
                  onClick={() => this.setState({ active: false })}
                >
                  My Work
                </NavLink>
              </li>
              <li className={active ? "Menu__li Menu__li--active" : "Menu__li"}>
                <NavLink
                  to="/contact"
                  activeClassName="Menu__link--selected"
                  className="Menu__link"
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
