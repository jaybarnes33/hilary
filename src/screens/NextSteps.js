import React from "react";
import fetchPrev from "../utils/fetchPrev";
import getLocation from "../utils/getLocation";
import styles from "../styles/travel.module.css";
import Header from "../components/Header";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Map from "../components/Map";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NextSteps = () => {
  let count = 0;
  let keys;
  const [data, setData] = React.useState({});
  const [location, setLocation] = React.useState({});
  React.useEffect(() => {
    setData(fetchPrev());
  }, []);
  keys = Object.keys(data);

  keys?.forEach((key) => {
    if (data[key] === "true") {
      count += 1;
    }
  });

  const percent = Math.round((count / keys.length) * 100);
  return (
    <div className={styles.wrapper}>
      <Header title="Next Steps" variant="danger" />
      <div className="progress-wrapper mt-2">
        <CircularProgressbar
          value={percent}
          text={`${percent}%`}
          styles={buildStyles({
            pathColor: percent > 50 && `red`,
            textColor: "red",
            trailColor: "#d6d6d6",
            backgroundColor: "red",
          })}
        />
      </div>

      {percent >= 50 && (
        <>
          {" "}
          <Map center={getLocation()} />
          <i className="bi bi-exclamation"></i>
          <p className="result mt-2">
            Based on your answers, there is a {percent}% chance that you are
            infected, you are advised to visit the nearest health facility!
          </p>
        </>
      )}
      <div className="resources">
        <Link to="/resources">
          <Button>Additional Resources</Button>
        </Link>
      </div>
    </div>
  );
};

export default NextSteps;
