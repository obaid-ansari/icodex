import React from "react";
import { NavLink } from "react-router-dom";
import AboutImage from "../assets/about.svg";

const About = () => {
  return (
    <>
      <section className="container py-lg-5 py-3">
        <div className="row align-items-center">
          {/* LEFT CONTENT */}
          <div className="col-md-6">
            <h1 className="fw-bold mb-4">Why Choose Us?</h1>

            <p>
              <strong>Expertise:</strong> Our team consists of experienced IT
              professionals who stay updated with the latest industry trends.
            </p>

            <p>
              <strong>Customization:</strong> Every business is unique. We build
              tailored solutions that match your specific needs and goals.
            </p>

            <p>
              <strong>Customer-Centric Approach:</strong> We prioritize client
              satisfaction and provide top-notch support.
            </p>

            <p>
              <strong>Affordability:</strong> We offer competitive pricing
              without compromising service quality.
            </p>

            <p>
              <strong>Reliability:</strong> Our services are reliable and
              available 24/7.
            </p>

            {/* BUTTONS */}
            <div className="mt-3">
              <NavLink to="/contact" className="btn btn-primary me-3">
                Contact Now
              </NavLink>

              <NavLink to="/services" className="btn btn-outline-dark">
                Our Services
              </NavLink>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-md-6 text-center mt-4 mt-lg-0">
            <img
              src={AboutImage}
              alt="about"
              className="img-fluid"
              style={{
                maxHeight: "350px",
                filter: "drop-shadow(3px 3px 1px blue)",
              }}
            />
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row text-center g-2">
            <div className="col-md-3">
              <div className="bg-dark text-light p-4 rounded-4 shadow h-100">
                <h2 className="fw-bold display-5">20+</h2>
                <p className="mb-0">Registered Companies</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="bg-dark text-light p-4 rounded-4 shadow h-100">
                <h2 className="fw-bold display-5">500+</h2>
                <p className="mb-0">Happy Clients</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="bg-dark text-light p-4 rounded-4 shadow h-100">
                <h2 className="fw-bold display-5">100+</h2>
                <p className="mb-0">Well Known Developers</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="bg-dark text-light p-4 rounded-4 shadow h-100">
                <h2 className="fw-bold display-5">24/7</h2>
                <p className="mb-0">Service Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
