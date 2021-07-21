import React from "react";
import { Container } from "react-bootstrap";
import Educational from "../components/Educational";
import Header from "../components/Header";
import Layout from "../components/Layout";
import resources from "../data/resources";
import styles from "../styles/travel.module.css";
const Resources = () => {
  return (
    <Layout>
      <Container>
        <div className={styles.wrapper}></div>
        <div className={styles.resourcesWrapper}>
          <Header title="Resources" variant="warning" />
          {resources.map((resource) => (
            <Educational
              image={resource.image}
              title={resource.title}
              link={resource.link}
            />
          ))}
        </div>
      </Container>
    </Layout>
  );
};

export default Resources;
