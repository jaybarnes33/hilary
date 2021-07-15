import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import styles from "../styles/travel.module.css";
import fetchPrev from "../utils/fetchPrev";

const Contact = ({ history }) => {
  const { goBack } = useHistory();
  const [data, setData] = useState({});

  const [contactData, setContactData] = useState({
    contact: false,
    type: "",
  });

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
    <div className={styles.travel}>
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
                onChange={handleChange}
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
                onChange={handleChange}
                required
              />
            </Form.Group>
          </div>
          {contactData.contact && (
            <>
              {" "}
              <Form.Group>
                <Form.Check
                  type="radio"
                  name="type"
                  label="Contact with COVID-19 suspected case?"
                  value="Contact with COVID-19 suspected case."
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Check
                  type="radio"
                  name="type"
                  label="Contact with COVID-19 positive case?"
                  value="Contact with COVID-19 positive case."
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </>
          )}
          <div className={styles.buttons}>
            <Button className="mr-4 next" onClick={handlePrev}>
              Previous
            </Button>
            <Button className="next" onClick={() => handleNext("symptoms")}>
              Next
            </Button>
          </div>
        </>
      </Form>
    </div>
  );
};

export default Contact;
