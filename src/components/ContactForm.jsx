import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState(null);

  // Validate form fields
  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required.";
    if (!formData.email) {
      formErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email is not valid.";
    }
    if (!formData.message) formErrors.message = "Message is required.";
    return formErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      setAlert("Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      window.scrollTo({ top: 0, behavior: "smooth" });

      // Clear alert after 3 seconds
      setTimeout(() => setAlert(null), 3000);
    }
  };

  return (
    <section id="contact" className="py-12">
      {alert && (
        <div className="bg-green-100 text-green-700 p-4 rounded text-center max-w-lg mx-auto mb-6">
          {alert}
        </div>
      )}
      <h3 className="text-center text-2xl font-bold mb-6">Contact Us</h3>
      <div className="container mx-auto">
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white p-8 rounded shadow border-t-4 border-blue-500"
        >
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Name"
              className={`w-full p-2 border rounded ${
                errors.name ? "border-red-500" : ""
              }`}
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Email"
              className={`w-full p-2 border rounded ${
                errors.email ? "border-red-500" : ""
              }`}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              placeholder="Write your message"
              className={`w-full p-2 border rounded ${
                errors.message ? "border-red-500" : ""
              }`}
              rows="4"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-orange-400 text-white py-2 rounded hover:bg-orange-500"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
