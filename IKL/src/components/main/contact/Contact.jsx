import "./Contact.css";
import founders from "../../../assets/Founders.png";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    membershipInterest: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate(formData);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
        // Handle form submission logic here (e.g., send data to an API)
        console.log(formData);
    }
  };

  const validate = (values) => {
    let errors = {};

    if (!values.name) {
        errors.name = 'Name is required';
    }

    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    if (!values.description) {
        errors.description = 'Description is required';
    }

    if (!values.membershipInterest) {
        errors.membershipInterest = 'Please select your interest in membership';
    }

    return errors;
};

  return (
    <>
      <div className="contact-image">
        <h1 className="contact-title">Get in touch!</h1>
      </div>
      <div className="contact-section">
        <div className="contact-images">
          <img src={founders} alt="" className="contact-photo1" />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5831.355979647195!2d-76.15574605266613!3d43.048206224981165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d9f3b9413c46c7%3A0x3aa758c7ec4265ac!2sDowntown%2C%20Syracuse%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbg!4v1705921588946!5m2!1sen!2sbg"
            loading="lazy"
            className="google-maps"
          ></iframe>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit} className="form-details">
            <div className="name-div">
              <p className="form-label">Name:</p>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="name-input"
                placeholder="Name"
              />
            {errors.name && <p className="form-error">{errors.name}</p>}
            </div>
            <div className="email-div">
              <p className="form-label">Email:</p>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="email-input"
                placeholder="Email"
              />
              {errors.email && <p className="form-error">{errors.email}</p>}
            </div>
            <div className="desc-div">
              <p className="form-label">Description:</p>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="description-input"
                maxLength={250}
                placeholder="How can we help you and/or what programs are you interested in working with?"
              />
              {errors.description && <p className="form-error">{errors.description}</p>}
            </div>
            <div className="radio-main-div">
              <p className="form-label">Are you interested in a membership?</p>
              <div className="radio-div">
                <div className="radio-content">
                  <input
                    type="radio"
                    name="membershipInterest"
                    value="yes"
                    checked={formData.membershipInterest === "yes"}
                    onChange={handleChange}
                    className="radio-input"
                  />
                  <p className="form-label radio-answer">Yes</p>
                </div>
                <div className="radio-content">
                  <input
                    type="radio"
                    name="membershipInterest"
                    value="no"
                    checked={formData.membershipInterest === "no"}
                    onChange={handleChange}
                    className="radio-input"
                  />
                  <p className="form-label radio-answer">No</p>
                </div>
              </div>
                {errors.membershipInterest && <p className="form-error">{errors.membershipInterest}</p>}
            </div>
            <button type="submit" className="submit-btn-form">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
