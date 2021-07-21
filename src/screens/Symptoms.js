import React from "react";
import { Form, Button } from "react-bootstrap";
import fetchPrev from "../utils/fetchPrev";
import { useHistory } from "react-router-dom";
import styles from "../styles/travel.module.css";
import Header from "../components/Header";
import Layout from "../components/Layout";
const Symptoms = ({ history }) => {
  const { goBack } = useHistory();
  const [data, setData] = React.useState({});
  const [isSymptoms, setIsSymptoms] = React.useState(false);
  const [symptoms, setSymptoms] = React.useState({
    drycough: false,
    tiredness: false,
    over60: false,
    healthworker: false,
  });

  React.useEffect(() => {
    setData(fetchPrev());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSymptoms((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    sessionStorage.setItem("covid", JSON.stringify({ ...data, ...symptoms }));
  };

  const handleNext = (next) => {
    handleSubmit();

    history.push(`/${next}`);
  };

  const handlePrev = () => {
    handleSubmit();
    goBack();
  };
  return (
    <Layout>
      <div className={styles.wrapper}>
        <Header variant="warning" title="Symptoms" />
        <Form>
          <h4>Showing any symptoms?</h4>
          <Form.Group>
            <label htmlFor="yes" className="py-2 mb-1 mr-2">
              Yes
            </label>
            <Form.Check
              type="radio"
              name="contact"
              className="mr-2"
              value={symptoms}
              onChange={() => setIsSymptoms(true)}
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
              value={symptoms}
              onChange={() => setIsSymptoms(false)}
              required
            />
          </Form.Group>

          {isSymptoms && (
            <>
              <div className="age-wrapper">
                <h4>Are you sixty and above?</h4>
                <Form.Group>
                  <label htmlFor="yes" className="py-2 mb-1 mr-2">
                    Yes
                  </label>
                  <Form.Check
                    type="radio"
                    name="over60"
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
                    name="over60"
                    value={false}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </div>
              <div className="symptoms-wrapper">
                <h4>Select all that apply</h4>

                <Form.Group>
                  <Form.Check
                    type="radio"
                    name="sneezing"
                    label="Sneezing"
                    value={true}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Check
                    type="radio"
                    name="fever"
                    label="Fever"
                    value={true}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Check
                    type="radio"
                    name="sore-throat"
                    label="Sore Throat"
                    value={true}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Check
                    type="radio"
                    name="drycough"
                    label="Cough"
                    value={true}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Check
                    type="radio"
                    name="tiredness"
                    label="Tiredness"
                    value={true}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Check
                    type="radio"
                    name="loss-of-smell"
                    label="Loss of smell and taste"
                    value={true}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Check
                    type="radio"
                    name="healthworker"
                    label="Healthworker"
                    value={true}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </div>
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
              onClick={() => handleNext("what-to-do")}
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </Layout>
  );
};

export default Symptoms;
