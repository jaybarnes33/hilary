import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "../styles/home.module.css";

const Info = ({ data, title }) => {
  return (
    <>
      <Row>
        <Col lg={12}>
          <div className="infoWrapper">
            <h6 className={`${styles.headingLarge} heading`}>
              Total Covid Cases
            </h6>
            <p>{data?.confirmed}</p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={6}>
          <div className="infoWrapper">
            <h6 className="heading">Active</h6>
            <p>{data?.existing}</p>
          </div>
        </Col>
        <Col xs={6}>
          <div className="infoWrapper">
            <h6 className="heading">Recoveries</h6>
            <p>{data?.recovered}</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <div className="infoWrapper">
            <h6 className="heading">Deaths</h6>
            <p>{data?.deaths}</p>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Info;
