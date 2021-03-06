import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import Layout from "../components/Layout";

import styles from "../styles/travel.module.css";
import fetchPrev from "../utils/fetchPrev";

const Contact = ({ history }) => {
  const { goBack } = useHistory();
  const [data, setData] = useState({});

  const [contactData, setContactData] = useState({
    positive: false,
    suspect: false,
  });

  const [contact, setContact] = useState(false);
  useEffect(() => {
    setData(fetchPrev());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    sessionStorage.setItem(
      "covid",
      JSON.stringify({ ...data, ...contactData })
    );
  };

  const handleNext = (next) => {
    handleSubmit();
    console.log(contactData);
    history.push(`/${next}`);
  };

  const handlePrev = () => {
    handleSubmit();
    goBack();
  };
  return (
    <Layout>
      <div className={styles.wrapper}>
        <Form>
          <>
            Any recent contact with COVID-19 patient?
            <br />
            <div>
              <Form.Group>
                <label htmlFor="yes" className="py-2 mb-1 mr-2">
                  Yes
                </label>
                <Form.Check
                  type="radio"
                  name="contact"
                  className="mr-2"
                  value={true}
                  onChange={() => setContact(true)}
                  required
                />
              </Form.Group>
              <Form.Group>
                <label htmlFor="no" className="py-2 mb-1 mr-2">
                  No
                </label>
                <Form.Check
                  type="radio"
                  name="contact"
                  value={false}
                  onChange={() => setContact(false)}
                  required
                />
              </Form.Group>
            </div>
            {contact && (
              <>
                {" "}
                <Form.Group>
                  <Form.Check
                    type="radio"
                    name="suspect"
                    label="Contact with COVID-19 suspected case?"
                    value={true}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Check
                    type="radio"
                    name="positive"
                    label="Contact with COVID-19 positive case?"
                    value={true}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </>
            )}
            <div className={styles.buttons}>
              <Button
                variant="warning"
                className="mr-4 next"
                onClick={handlePrev}
              >
                Back
              </Button>
              <Button
                variant="warning"
                className="next"
                onClick={() => handleNext("symptoms")}
              >
                Next
              </Button>
            </div>
          </>
        </Form>
      </div>
    </Layout>
  );
};

export default Contact;
