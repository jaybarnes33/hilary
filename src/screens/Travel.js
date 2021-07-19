import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import countries from "../data/countries";
import styles from "../styles/travel.module.css";
import fetchPrev from "../utils/fetchPrev";

const Travel = ({ history }) => {
  const { goBack } = useHistory();
  const [data, setData] = useState({});

  const [travelData, setTravelData] = useState({
    country: "",
  });
  const [travel, setTravel] = useState(false);
  useEffect(() => {
    setData(fetchPrev());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTravelData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    sessionStorage.setItem("covid", JSON.stringify({ ...data, ...travelData }));
  };

  const handleNext = (next) => {
    handleSubmit();
    console.log(travelData);
    history.push(`/${next}`);
  };

  const handlePrev = () => {
    handleSubmit();
    goBack();
  };
  return (
    <div className={styles.wrapper}>
      <Header
        variant="warning"
        title="Travel"
        icon={<i className="bi bi-car"></i>}
      />
      <Form>
        <>
          Any recent travel?
          <br />
          <div className=" ">
            <Form.Group>
              <label htmlFor="yes" className="py-2 mb-1 mr-2">
                Yes
              </label>
              <Form.Check
                id="yes"
                type="radio"
                name="travel"
                className="mr-2"
                value={true}
                onChange={() => setTravel(true)}
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="no" className="py-2 mb-1 mr-2">
                No
              </label>
              <Form.Check
                type="radio"
                name="travel"
                value={false}
                onChange={() => setTravel(false)}
                required
              />
            </Form.Group>
          </div>
          {travel && (
            <Form.Control
              name="country"
              as="select"
              value={travelData.country}
              onChange={handleChange}
              required
            >
              <option value="">Select a country</option>
              {countries.map((country) => (
                <option value={country.name} key={country.name}>
                  {country.emoji} {country.name}
                </option>
              ))}
            </Form.Control>
          )}
          <div className={styles.buttons}>
            <Button
              variant="success"
              className="mr-4 next"
              onClick={handlePrev}
            >
              Back
            </Button>
            <Button
              variant="success"
              className="next"
              onClick={() => handleNext("contact")}
            >
              Next
            </Button>
          </div>
        </>
      </Form>
    </div>
  );
};

export default Travel;
