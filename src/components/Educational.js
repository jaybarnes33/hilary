import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const Educational = ({ image, link, title }) => {
  return (
    <div>
      <a href={link}>
        <Row>
          <Col xs={6} className="d-inline-flex align-items-center">
            <Image src={image} alt={title} fluid />
          </Col>
          <Col xs={6} className="d-inline-flex align-items-center">
            <span className="ml-5">{title}</span>
          </Col>
        </Row>
      </a>
    </div>
  );
};

export default Educational;
