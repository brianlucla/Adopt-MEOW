import React, { useState, useEffect } from "react";
import pawPrint from "../assets/images/testimonials/paw.png";
import animalBackground from "../assets/images/testimonials/animals.png";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    volunteer: false,
    adopt: false,
    general: false,
    file: null,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  /* hook ueEffect for alert */
   useEffect(() => {
     if (isSubmitted) {
       setTimeout(() => {
         setIsSubmitted(false);
       }, 3000); // remove the success message after 5 seconds
     }
   }, [isSubmitted]);

  const handleChange = (e) => {
    const { name, checked, type } = e.target;
    const fieldValue = type === "checkbox" ? checked : e.target.value;

    if (type === "file") {
      setFormData({ ...formData, [name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: fieldValue });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formEndpoint =
      "https://getform.io/f/b471c7e2-5de9-46c2-8049-ef9bfd99e9f5"; // Replace this with your actual Getform endpoint URL

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);
    formDataToSend.append("volunteer", formData.volunteer);
    formDataToSend.append("adopt", formData.adopt);
    formDataToSend.append("inquiry", formData.inquiry);
    formDataToSend.append("file", formData.file);

    // Make a POST request to the Getform endpoint
    fetch(formEndpoint, {
      method: "POST",
      body: formDataToSend,
    })
      .then((response) => {
        // Test to ensure the submission was successful
        if (response.ok) {
          // Display a success alert message
          setIsSubmitted(true);
          // Clear the form after submission
          setFormData({
            name: "",
            email: "",
            message: "",
            volunteer: false,
            adopt: false,
            inquiry: false,
            file: null,
          });
        } else {
          throw new Error("Server response was not ok.");
        }
        return response.json();
      })
      .then((data) => {
        // You can handle the response data here (e.g., further process it if needed)
        console.log("Form submitted successfully:", data);
      })
      .catch((error) => {
        // Handle any errors that occur during the submission
        console.error("Error submitting form:", error);
      });
  };

  return (
    <div>
      <div class="grid-container">
        <div class="grid-item journey">
          <h2 className="text-white">Join Our Journey</h2>
        </div>
        <div class="grid-item description">
          <p className="text-white">
            We invite you to be a part of our heartwarming journey. Whether you
            are looking to adopt a furry friend or seeking valuable pet care
            information, Adopt-Meow is here to guide you every step of the way.
            Together, let's make the world a better place for our beloved pets.
          </p>
        </div>
      </div>

      <div className="contact-us">
        <h2>
          <img
            src={pawPrint}
            alt="Paw print"
            style={{ marginRight: "10px", height: "30px", width: "30px" }}
          />
          Contact Us
        </h2>
        {isSubmitted && (
          <div className="success-message">
            Your form has been submitted successfully!
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url(${animalBackground})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url(${animalBackground})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url(${animalBackground})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "250px",
              }}
            ></textarea>
          </div>

          <div className="form-group">
            <input
              type="checkbox"
              id="volunteer"
              name="volunteer"
              checked={formData.volunteer}
              onChange={handleChange}
            />
            <label htmlFor="volunteer">Volunteer</label>
          </div>

          <div className="form-group">
            <input
              type="checkbox"
              id="adopt"
              name="adopt"
              checked={formData.adopt}
              onChange={handleChange}
            />
            <label htmlFor="adopt">Adopt</label>
          </div>

          <div className="form-group">
            <input
              type="checkbox"
              id="inquiry"
              name="inquiry"
              checked={formData.inquiry}
              onChange={handleChange}
            />
            <label htmlFor="inquiry">Inquiry</label>
          </div>

          <div className="form-group">
            <label htmlFor="file">Upload File</label>
            <input
              type="file"
              id="file"
              name="file"
              onChange={handleChange}
              accept=".jpg, .jpeg, .png, .pdf"
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;