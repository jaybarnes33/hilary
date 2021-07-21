import React from "react";
import { Col, Row } from "react-bootstrap";
import Layout from "../components/Layout";
import styles from "../styles/travel.module.css";
const Emergency = () => {
  return (
    <Layout>
      <div className={styles.wrapper}>
        {" "}
        <Row>
          <Col md={12}>
            <div className="numbers">
              <Col md={12}>
                <h1>Tolls</h1>
                <ul>
                  <li>
                    <a href="tel:+112">
                      <i className="bi bi-telephone mr-2"></i>112 - Emergency
                    </a>
                  </li>
                  <li>
                    <a href="tel:+311">
                      <i className="bi bi-telephone mr-2"></i>311 - General
                      Information
                    </a>
                  </li>
                  <li>
                    <a href="tel:+0800110622">
                      <i className="bi bi-telephone mr-2"></i>0800110622 - MCA
                      Complaints Number
                    </a>
                  </li>
                </ul>
              </Col>
              <Col md={12}>
                <h1>Hotline</h1>
                <ul>
                  <li>
                    <a href="tel:+0307011419">
                      <i className="bi bi-telephone mr-2"></i>0307011419
                    </a>
                  </li>
                  <li>
                    <a href="tel:+0558439868">
                      <i className="bi bi-telephone mr-2"></i>0558439868
                    </a>
                  </li>
                  <li>
                    <a href="tel:+0509497700">
                      <i className="bi bi-telephone mr-2"></i>0509497700
                    </a>
                  </li>
                </ul>
              </Col>
            </div>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default Emergency;
