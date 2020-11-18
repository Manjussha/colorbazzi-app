import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import bgShape1 from "@images/banner/banner-shape-1-1.png";
import bgShape2 from "@images/banner/banner-shape-1-2.png";
import bannerBG from "@images/banner/banner-bg-1.png";
import bannerShape1 from "@images/shapes/banner-1-1.png";
import bannerShape2 from "@images/banner/banner-shape-1-4.png";
import image from "@images/banner/banner-img-1.png";

const Banner = () => {
  return (
    <section className="banner-one" id="home">
      <img src={bgShape1} alt="Banner-Shape-1" className="banner-shape-1" />
      <img src={bgShape2} alt="Banner-Shape-2" className="banner-shape-2" />
      <div
        className="banner-one__bg"
        style={{ backgroundImage: `url(${bannerBG})` }}
      ></div>
      <Container>
        <Row>
          <Col xl={6} lg={6}>
            <div className="banner-one__content">
              <h3>
                # No 1 Betting App
                <br />
                
                <br />
                
              </h3>
              <p>
              Can help you to Earn More Money-{" "}
                <br />
                and make your Fantasy come True.
              </p>
              <a href="https://raw.githubusercontent.com/Manjussha/colorbazzi/main/app-release.apk" className="thm-btn">
                <span>Download App</span>
              </a>
            </div>
          </Col>
          <Col xl={6} lg={6}>
            <div className="banner-img wow fadeInUp" data-wow-duration="1500ms">
              <img src={bannerShape1} className="banner-image__curvs" alt="" />
              <div
                className="banner-bg"
                style={{ backgroundImage: `url(${bannerShape2})` }}
              ></div>
              <img src={image} alt="Banner-img" />
              <div className="banner-icon-1">
                <i className="piloz-lamp"></i>
              </div>
              <div className="banner-icon-2">
                <i className="piloz-linked"></i>
              </div>
              <div className="banner-icon-3">
                <i className="piloz-human-resources"></i>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
