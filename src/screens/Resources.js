import React from "react";
import { Container } from "react-bootstrap";
import Educational from "../components/Educational";
import Header from "../components/Header";
import resources from "../data/resources";
import styles from "../styles/travel.module.css";
const Resources = () => {
  return (
    <Container>
      <div className={styles.wrapper}></div>
      <div className={styles.resourcesWrapper}>
        <Header title="Resources" variant="success" />
        {resources.map((resource) => (
          <Educational
            image={resource.image}
            title={resource.title}
            link={resource.link}
          />
        ))}
      </div>
    </Container>
  );
};

export default Resources;
