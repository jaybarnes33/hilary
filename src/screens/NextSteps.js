import React from "react";
import fetchPrev from "../utils/fetchPrev";
import styles from "../styles/travel.module.css";
import Header from "../components/Header";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Container } from "react-bootstrap";
const NextSteps = () => {
  let count = 0;
  let keys;
  const [data, setData] = React.useState({});
  React.useEffect(() => {
    setData(fetchPrev());
  }, []);
  keys = Object.keys(data);
  console.log(keys.length);
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
      <div className="resources">
        {percent > 50 && (
          <>
            <p className="result mt-2">
              Based on your answers, there is a {percent}% chance that you are
              infected, you are advised to visit your nearest health facility.
            </p>

            <p>For more information, visit these sites</p>
            <ul>
              <li>
                <a
                  target="blank"
                  href="https://www.ghanahealthservice.org/covid19/"
                >
                  Ghana Health Service
                </a>
              </li>
              <li>
                <a
                  target="blank"
                  href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public?gclid=Cj0KCQjwub-HBhCyARIsAPctr7xROwzIAVLnkzOisB-LBlnC_AKpjs5YwSU4SvoVDNtrTofiuuCaBkwaAv8wEALw_wcB"
                >
                  World Health Organization
                </a>
              </li>
              <li>
                <a
                  target="blank"
                  href="https://wwwnc.cdc.gov/travel/notices/covid-1/coronavirus-ghana"
                >
                  CDC
                </a>
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default NextSteps;
