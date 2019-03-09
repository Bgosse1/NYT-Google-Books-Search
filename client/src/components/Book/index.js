import React, { Component } from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

class Book extends Component {
  render() {
    return (
      <ListItem>
        <Row className="flex-wrap-reverse">
          <Col size="md-8">
            <h3 className="font-italic">{this.props.title}</h3>
            {this.props.subtitle && <h5 className="font-italic">{this.props.subtitle}</h5>}
          </Col>
          <Col size="md-4">
            <div className="btn-container">
              <a
                className="btn btn-light"
                target="_blank"
                rel="noopener noreferrer"
                href={this.props.link}
              >
                View
              </a>
              <this.props.Button />
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <p className="font-italic small">Written by {this.props.authors}</p>
          </Col>
        </Row>
        <Row>
          <Col size="12 sm-4 md-2">
            <img
              className="img-thumbnail img-fluid w-100"
              src={this.props.image}
              alt={this.props.title}
            />
          </Col>
          <Col size="12 sm-8 md-10">
            <p>{this.props.description}</p>
          </Col>
        </Row>
      </ListItem>
    );
  }
}

export default Book;
