import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./About.module.css"
import image from "../../assets/Aboutus.svg"
const About = () => {
  return (
    <>
      <Layout>
          <div className={styles.container}>
            <div className={styles.about__content}>
              <div className={styles.heading}>
                <h3>Who are we? </h3>
                <p >“We aim to help job seekers grow careers. We love helping people stand out in their job search and get hired faster.”</p>
                <p >We believe that building a job-worthy resume should be a fast and simple process. In fact, we’ve always been about building systems that are quick and easy-to-use, yet consistently get good results.</p>
              </div>
            </div>
            <div className={styles.about__section}>
              <img src={image} alt="" />
              <div className={styles.content}>
                <h5>Use the best resume maker as your guide
</h5>
                <p style={{marginTop:"2rem",width:"80%"}}>Getting that dream job can seem like an impossible task. We’re here to change that. Give yourself a real advantage with the best online resume maker: created by experts, improved by data, trusted by millions of professionals.</p>
                <button className={styles.btn} > <Link to="/resume" className={styles.btn_more}> Create Resume</Link></button>
              </div>
            </div>
          </div>
      </Layout>
    </>
  );
};

export default About;
