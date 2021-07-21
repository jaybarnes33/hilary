import React from "react";
import { Container, Image } from "react-bootstrap";
import Layout from "../components/Layout";

const Assess = () => {
  return (
    <Layout>
      <div className="assessment d-flex justify-content-center align-items-center">
        <Container>
          <h1>Welcome to the covid-19 self-assessment</h1>

          <div className="d-flex justify-content-center">
            <img src="/images/mask.png" alt="Man wearing nosemask" fluid />
          </div>

          <p>
            This will help you assess your symptoms and determine if you are a
            candidate for a coronavirus disease 2019(COVID-19) test .It also
            offers guidance on when to seek medical care and what to do in the
            meantime.
          </p>
          <p>
            Before using this guide: If you are asking on behalf of someone
            else, please make sure the person is:
            <ul>
              <li>Conscious and alert</li>
              <li>Responding normally to you</li>
            </ul>
          </p>

          <a
            type="button"
            className=" mt-2 btn btn-lg btn-warning btn-block"
            href="/travel"
          >
            Get Started
          </a>
        </Container>
      </div>
    </Layout>
  );
};

export default Assess;
