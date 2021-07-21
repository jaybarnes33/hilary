import React, { useState } from "react"
import fetchPrev from "../utils/fetchPrev"
import getLocation from "../utils/getLocation"
import styles from "../styles/travel.module.css"
import Header from "../components/Header"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

import { Button, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import Layout from "../components/Layout"

const NextSteps = () => {
  const [resources, setResources] = useState(false)
  let count = 0
  let keys
  const [data, setData] = React.useState({})
  const [location, setLocation] = React.useState({})
  React.useEffect(() => {
    setData(fetchPrev())
  }, [])
  keys = Object.keys(data)

  keys?.forEach(key => {
    if (data[key] === "true") {
      count += 1
    }
  })

  const percent = Math.round((count / keys.length) * 100)
  return (
    <Layout>
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
              backgroundColor: "red"
            })}
          />
        </div>

        <>
          <p className="result mt-2">
            Based on your answers, there is a {percent}% chance that you are
            infected, you are advised to visit the nearest
            <Link to="/map">health facility!</Link>
          </p>
          Would you like to get additional resources?
          <Form.Group className="d-flex justify-content-evenly">
            <Form.Check
              type="radio"
              name="resources"
              className="mr-5 "
              label="Yes"
              onChange={() => setResources(true)}
            />
            <Form.Check
              name="resources"
              type="radio"
              label="No"
              onChange={() => setResources(false)}
            />
          </Form.Group>
        </>

        {resources && (
          <div className="resources">
            <Link to="/resources">
              <Button className="mt-2">Educational Resources</Button>
            </Link>
            <Link to="/contacts">
              <Button className="mt-2">Emergency Contacts</Button>
            </Link>
            <Link to="/map">
              <Button className="mt-2">Test Centres</Button>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default NextSteps
