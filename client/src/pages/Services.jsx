import React, { useEffect, useState } from "react";
import { getServices } from "../services/formServices";

const Services = () => {
  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    try {
      const res = await getServices();
      setServices(res.data.services);
    } catch (error) {
      console.log("Error fetching services:", error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <section className="container py-5">
      {/* Section Heading */}
      <div className="text-center mb-5">
        <h2 className="fw-bold text-dark">Our Services</h2>
        <p className="text-muted lead">
          We provide high-quality solutions to help your business grow.
        </p>
      </div>

      {/* Services Grid */}
      <div className="row g-4">
        {services.map((service) => (
          <div className="col-lg-4 col-md-6" key={service._id}>
            <div className="card h-100 bg-dark text-white rounded-4 border border-3 border-primary">
              {/* Image */}
              <img
                src="/service.svg"
                className="card-img-top p-4"
                alt="service"
                style={{
                  height: "220px",
                  objectFit: "contain",
                  filter: "drop-shadow(3px -3px 1px blue)",
                }}
              />

              <div className="card-body">
                {/* Provider + Price */}
                <div className="d-flex justify-content-between mb-1">
                  <span className="text-secondary fs-5">
                    {service.provider}
                  </span>
                  <span className="text-primary fw-semibold fs-5">
                    ₹{service.price}
                  </span>
                </div>

                {/* Title */}
                <h4 className="fw-bold mb-2">{service.services}</h4>

                {/* Description */}
                <p className="text-light small m-0">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
