import React, { Component } from "react";

import "./Card.scss";

interface ICardProps {
  cardID: string;
  heading: string;
  subheading: string;
}

export default class Card extends Component<ICardProps> {
  public render() {
    const { cardID, heading, subheading } = this.props;
    return (
      <div className={`Card Card--${cardID}`}>
        <h3 className="Card--heading">{heading}</h3>
        <h5 className="Card--subheading">{subheading}</h5>
        {this.props.children}
      </div>
    );
  }
}
