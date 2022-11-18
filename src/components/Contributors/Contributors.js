import React from "react";
import Layout from "../Layout/Layout";
import styles from "./Contributors.module.css";
import image from "../../assets/contibutorss.png.jpg"
import image1 from "../../assets/contibutors.jpg"
import image2 from "../../assets/nikita.jpg"
const Contributors = () => {
  return (
    <>
      <Layout><div className={styles.main}><h2>Contributors</h2>
        <div className={styles.container_main}>
          
          <div className={styles.container_contactcard}>
            <span
              className={styles.ant_avatar}
              style={{width: "100px", height: "100px"}}
            >x
              <img src={image2} alt="" srcset="" />
            </span>
            <h3
              style={{
                color: "white",
                marginTop: "50px",
                margin: "30px 0 10px",
                fontWeight:"500",
                fontSize: "1.17em"
              }}
            >
              Nikita Deshmukh
            </h3>
            <p style={{marginTop: "0",
    marginBottom: "1em",color:"white"}}>Developer</p>
            <div
              styles={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <p style={{fontSize:"11px",color:"grey"}}>nikitadeshmukh1309@gmail.com</p>
              <a href="https://linkedin.com/in/nikita-deshmukh-abb176203/" style={{color:"white",listStyle:"none",textDecoration:"none"}}>
                <p>
                  <span
                    role="img"
                    aria-label="linkedin"
                    class="anticon anticon-linkedin"
                  >
                    <svg
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="linkedin"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3.1-447.8.2-671.7.3-671.7 447.8.1 671.7.2 671.7.3-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 10-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z"></path>
                    </svg>
                  </span>
                  @nikitadeshmukh
                </p>
              </a>
            </div>
          </div>
          <div className={styles.container_contactcard}>
            <span
              className={styles.ant_avatar}
              style={{width: "100px", height: "100px"}}
            >x
              <img src={image} alt="" srcset="" />
            </span>
            <h3
              style={{
                color: "white",
                marginTop: "50px",
                margin: "30px 0 10px",
                fontWeight:"500",
                fontSize: "1.17em"
              }}
            >
              Ekta Yadav
            </h3>
            <p style={{marginTop: "0",
    marginBottom: "1em",color:"white"}}>Developer</p>
            <div
              styles={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <p style={{fontSize:"11px",color:"grey"}}>yadavekta482@gmail.com</p>
              <a href="https://linkedin.com/in/ekta-yadav-661a52231" style={{color:"white",listStyle:"none",textDecoration:"none"}}>
                <p>
                  <span
                    role="img"
                    aria-label="linkedin"
                    class="anticon anticon-linkedin"
                  >
                    <svg
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="linkedin"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3.1-447.8.2-671.7.3-671.7 447.8.1 671.7.2 671.7.3-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 10-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z"></path>
                    </svg>
                  </span>
                  @ektaydav
                </p>
              </a>
            </div>
          </div>
          <div className={styles.container_contactcard}>
            <span
              className={styles.ant_avatar}
              style={{width: "100px", height: "100px"}}
            >x
              <img src={image1} alt="" srcset="" />
            </span>
            <h3
              style={{
                color: "white",
                marginTop: "50px",
                margin: "30px 0 10px",
                fontWeight:"500",
                fontSize: "1.17em"
              }}
            >
              Yuvraj Kanathe
            </h3>
            <p style={{marginTop: "0",
    marginBottom: "1em",color:"white"}}>Designer</p>
            <div
              styles={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <p style={{fontSize:"11px",color:"grey"}}>yuvrajkanathe09@gmail.com</p>
              <a href="https://linkedin.com/in/yuvraj-kanathe-76a73121b" style={{color:"white",listStyle:"none",textDecoration:"none"}}>
                <p>
                  <span
                    role="img"
                    aria-label="linkedin"
                    class="anticon anticon-linkedin"
                  >
                    <svg
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="linkedin"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3.1-447.8.2-671.7.3-671.7 447.8.1 671.7.2 671.7.3-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 10-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z"></path>
                    </svg>
                  </span>
                  @yuvikanathe
                </p>
              </a>
            </div>
          </div>
         
        </div></div>
      </Layout>
    </>
  );
};

export default Contributors;
