import { useState } from "react";

function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.rating) {
      alert("Please fill all required fields");
      return;
    }

    console.log("Feedback Submitted:", formData); // debug / backend send

    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      rating: "",
      message: "",
    });

    // success message 3 sec la maraiya
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="feedback-container">
      <h2>Feedback Form</h2>

      {submitted && (
        <p className="success-msg">Thank you for your feedback 🙏</p>
      )}

      <form className="feedback-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name *"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email *"
          value={formData.email}
          onChange={handleChange}
        />

        <select
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        >
          <option value="">Rate Us *</option>
          <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
          <option value="4">⭐⭐⭐⭐ Very Good</option>
          <option value="3">⭐⭐⭐ Good</option>
          <option value="2">⭐⭐ Average</option>
          <option value="1">⭐ Poor</option>
        </select>

        <textarea
          name="message"
          placeholder="Your Feedback"
          rows="4"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}

export default Feedback;
