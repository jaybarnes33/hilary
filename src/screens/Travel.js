import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import styles from "../styles/travel.module.css";

const Travel = () => {
  const [travel, setTravel] = useState(false);
  return (
    <div className={styles.travel}>
      <Form>
        Any recent travel?
        <br />
        <div className="d-inline-flex justify-content-center align-items-center ">
          <>
            <label htmlFor="yes" className="py-2 mb-1 mr-2">
              Yes
            </label>
            <Form.Check
              id="yes"
              type="radio"
              name="travel"
              className="mr-2"
              value={travel}
              onChange={() => setTravel(true)}
            />
          </>
          <>
            <label htmlFor="no" className="py-2 mb-1 mr-2">
              No
            </label>
            <Form.Check
              type="radio"
              name="travel"
              value="no"
              onChange={() => setTravel(false)}
            />
          </>
        </div>
      </Form>

      {travel && <h1>Hello</h1>}
    </div>
  );
};

export default Travel;
