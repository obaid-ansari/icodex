import React from "react";
import hero from "../assets/hero.svg";
import about from "../assets/about.svg";
import { NavLink } from "react-router-dom";
import { useAuthHook } from "../hooks/useAuthHook";

const Home = () => {
  const { user } = useAuthHook();

  return (
    <>
      {/* HERO SECTION */}
      <section className="container py-lg-5 py-3">
        <div className="row align-items-center">
          {/* LEFT SIDE */}
          <div className="col-md-6">
            <p className="lead m-0">
              {user?.username ? `Hi ${user.username}` : "Welcome"}
            </p>
            <p className="fw-bold text-primary m-0">Innovative IT Solutions</p>

            <h1 className="fw-bold display-6 text-dark">
              Build Powerful <br /> Digital Experiences <br /> With iCodex
            </h1>

            <p className="text-muted my-3">
              iCodex helps businesses transform ideas into modern digital
              products. Our developers specialize in building fast, secure, and
              scalable web applications that improve efficiency, strengthen
              online presence, and drive real business growth.
            </p>

            <div className="mt-3">
              <NavLink to="/contact" className="btn btn-primary me-3">
                Contact Now
              </NavLink>

              <NavLink to="/about" className="btn btn-outline-dark">
                Learn More
              </NavLink>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-md-6 text-center mt-4 mt-lg-0">
            <img
              src={hero}
              alt="hero"
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

      {/* SECOND SECTION */}
      <section className="container py-lg-5 py-3">
        <div className="row align-items-center">
          {/* LEFT IMAGE */}
          <div className="col-md-6 text-center mb-4 mb-lg-0">
            <img
              src={about}
              alt="about"
              className="img-fluid"
              style={{
                maxHeight: "350px",
                filter: "drop-shadow(-3px 3px 1px blue)",
              }}
            />
          </div>

          {/* RIGHT TEXT */}
          <div className="col-md-6">
            <p className="fw-bold text-primary m-0">Get Started</p>

            <h1 className="fw-bold display-6 text-dark">
              Build Your Future <br /> With iCodex
            </h1>

            <p className="text-muted my-3">
              Join hundreds of businesses that trust iCodex to turn their ideas
              into powerful digital products. Our team focuses on modern
              technologies, clean design, and scalable solutions that help
              companies grow in the digital world.
            </p>

            <div className="my-3">
              <NavLink to="/contact" className="btn btn-primary me-3">
                Contact Now
              </NavLink>

              <NavLink to="/services" className="btn btn-outline-dark">
                Our Services
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
