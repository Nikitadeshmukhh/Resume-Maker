import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import resumeSvg from "../../assets/resume.svg";
import styles from "./HeroBanner.module.css"
const HeroBanner = ({ word }) => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.heading}>
            A <span>Resume</span> that stands out!
          </p>
          <p className={styles.heading}>
            Make your own resume. <span>It's free</span>
          </p>
        </div>
        <div className={styles.right}>
          <img src={resumeSvg} alt="Resume" />
        </div>
      </div>
  );
};

export default HeroBanner;