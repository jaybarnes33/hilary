import React from "react";

import Resource from "../components/Resource";

import Layout from "../components/Layout";

import styles from "../styles/travel.module.css";

const resourceData = [
  {
    title: "About Covid 19",
    href: [
      {
        title: " WHO ",
        url: "https://www.who.int/emergencies/diseases/novel-coronavirus-2019",
      },
      {
        title: " Ghana Health Service ",
        url: "https://www.ghanahealthservice.org/covid19/",
      },
    ],
    icon: <i className="fas fa-virus"></i>,
  },
  {
    title: "Preventive Measures",
    href: [
      "https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html",
    ],
    icon: <i className="fas fa-hands-wash"></i>,
  },
  {
    title: "Covid 19 videos",
    href: [
      "https://www.youtube.com/playlist?list=PLrMCoj4b_LOSOaHHrQK6CQiIFIa4m8UTz",
    ],
    icon: <i className="fas fa-video"></i>,
  },
  {
    title: "Covid 19 Recovered Patients Stigmatization",
    href: [
      "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjFsOKTlvPxAhVDiNUKHeMYBuwYABAAGgJ3cw&ae=2&ei=_433YPOHGMeIafnVqSA&ohost=www.google.com&cid=CAESQOD2g_GUbUhJpnAf1sE9c8TQ2PvdaG2WUY44diTrTbed_ajI2bNwiHsYK7X6TjagYAtQOmmTJpcNtjJOXPc_kEE&sig=AOD64_3mdys6UXL2XZZf2jkwwHNYvN-kJg&q&nis=1&sqi=2&adurl&ved=2ahUKEwizg9mTlvPxAhVHRBoKHflqCgQQ0Qx6BAgDEAE",
    ],
    icon: <i className="fas fa-users"></i>,
  },
];
const Resources = () => {
  return (
    <Layout>
      <div className={styles.wrapper}>
        {resourceData.map((data) => (
          <Resource data={data} />
        ))}
      </div>
    </Layout>
  );
};

export default Resources;
