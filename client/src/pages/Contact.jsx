import React, { useState } from "react";
import { useAuthHook } from "../hooks/useAuthHook";
import { contactData } from "../services/formServices";
import ContactImage from "../assets/contact.svg";
import { toast } from "react-toastify";

const Contact = () => {
  const { user } = useAuthHook();
  const [userData, setUserData] = useState(true);

  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });

    setUserData(false);
  }

  const handleContactForm = async (data) => {
    try {
      const res = await contactData(data);
      if (res.status === 200) {
        toast.success(res.data.message);
      }
    } catch (error) {
      // console.log(
      //   "Error while Contact form submission:",
      //   error.response.data.message,
      // );
      toast.error(
        error.response.data.errors
          ? error.response.data.errors
          : error.response.data.message,
      );
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();

    console.log("Contact Details:", contact);

    handleContactForm(contact);

    setContact({
      message: "",
    });
  };

  const handleUserOnChange = (event) => {
    const { name, value } = event.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container-fluid p-3 py-5 d-flex align-items-center justify-content-center bg-light">
      <div
        className="row bg-dark text-light rounded-4 overflow-hidden justify-content-center shadow"
        style={{ maxWidth: "1000px", width: "100%" }}
      >
        {/* LEFT IMAGE */}
        <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center p-4">
          <img
            src={ContactImage}
            alt="contact"
            className="img-fluid"
            style={{
              maxHeight: "350px",
              filter: "drop-shadow(3px -3px 1px blue)",
            }}
          />
        </div>

        {/* RIGHT FORM */}
        <div className="col-md-6 p-4">
          <h3 className="text-primary text-center mb-4 fw-bold">Contact Us</h3>

          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Username</label>
              <input
                type="text"
                name="username"
                className="form-control rounded-3 shadow-sm"
                placeholder="Enter your name"
                required
                value={contact.username}
                onChange={handleUserOnChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Email</label>
              <input
                type="email"
                name="email"
                className="form-control rounded-3 shadow-sm"
                placeholder="Enter your email"
                required
                value={contact.email}
                onChange={handleUserOnChange}
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">Message</label>
              <textarea
                name="message"
                rows="4"
                className="form-control rounded-3 shadow-sm"
                placeholder="Write your message..."
                required
                value={contact.message}
                onChange={handleUserOnChange}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 fw-bold py-2 rounded-3"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
