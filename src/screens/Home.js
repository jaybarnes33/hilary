import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Info from "../components/Info";
import Layout from "../components/Layout";

import styles from "../styles/home.module.css";
import fetchData from "../utils/fetchData";

const Home = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchStats() {
      setData(await fetchData());
    }

    fetchStats();
  }, []);

  return (
    <Layout>
      <Container>
        {console.log(data.ghana)}
        <div className={styles.container}>
          <Row>
            <Col md={12}>
              <Link to="/assessment">
                <div className="infoWrapper p-5 golden">
                  <Row>
                    <Col md={5} className="d-inline-flex align-items-center">
                      <div>
                        Covid 19
                        <h1>Self Assessment</h1>
                      </div>
                    </Col>
                    <Col
                      md={7}
                      className="d-inline-flex justify-content-end left"
                    ></Col>
                  </Row>
                </div>
              </Link>
            </Col>
            <Col md={12}>
              <h1 className="main-heading">Covid Stats Ghana</h1>
              <Info data={data?.ghana} />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <h1 className="main-heading">Covid Stats Global</h1>
              <Info data={data?.global} />
            </Col>
          </Row>
        </div>
      </Container>
    </Layout>
  );
};

export default Home;
