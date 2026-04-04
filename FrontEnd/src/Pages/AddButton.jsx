import React, { useState } from "react";
import BGURI from "../lib/BGURI";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddButton = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    buttonCategory: "",
    ReactTailwindCode: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.buttonCategory.trim()) {
      newErrors.buttonCategory = "Category is required";
    }

    if (!formData.ReactTailwindCode.trim()) {
      newErrors.ReactTailwindCode = "Code is required";
    } else if (formData.ReactTailwindCode.length < 10) {
      newErrors.ReactTailwindCode = "Code is too short";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true);
      setErrors({});

      const res = await fetch(`${BGURI}/api/buttons/add-button`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message || "Failed to submit");
      }

      setFormData({
        buttonCategory: "",
        ReactTailwindCode: "",
      });

      toast.success("Button Submitted successfully!");
      navigate("/");
    } catch (err) {
      console.error(err);
      toast.error(err.message || "An error occurred while submitting");
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-white flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-[#0f0f0f] p-6 shadow-lg">
        <h1 className="text-2xl font-semibold text-[#3ECBF8] ">
          Submit Your Button Code for Review
        </h1>
        <p className="text-sm py-2">
          Share your unique React Tailwind button code with our community! Fill
          out the form below to submit your button design for review. Our team
          will evaluate your submission and, if approved, it will be featured on
          our platform for others to use and enjoy. We look forward to seeing
          your creativity in action!
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Neccessary */}
          <div className="flex w-full justify-between items-center gap-4">
            <label className="block text-nowrap mb-1 text-sm text-gray-300">
              Working Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. user@example.com"
              className="w-[400px] bg-black border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[#3ECBF8]"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Category */}
          <div className="flex w-full justify-between items-center gap-4">
            <label className="block text-nowrap mb-1 text-sm text-gray-300">
              Category
            </label>
            <input
              type="text"
              name="buttonCategory"
              value={formData.buttonCategory}
              onChange={handleChange}
              placeholder="e.g. Primary, Ghost, Outline"
              className="w-[400px] bg-black border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[#3ECBF8]"
            />
            {errors.buttonCategory && (
              <p className="text-red-400 text-sm mt-1">
                {errors.buttonCategory}
              </p>
            )}
          </div>

          {/* Code */}
          <div>
            <label className="block mb-1 text-sm text-gray-300">
              React Tailwind Code
            </label>
            <textarea
              name="ReactTailwindCode"
              value={formData.ReactTailwindCode}
              onChange={handleChange}
              rows={16}
              placeholder={`<button className="bg-blue-500 text-white px-4 py-2 rounded">Click</button>`}
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 font-mono text-sm focus:outline-none focus:border-[#3ECBF8]"
            />
            {errors.ReactTailwindCode && (
              <p className="text-red-400 text-sm mt-1">
                {errors.ReactTailwindCode}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-[#3ECBF8] text-black px-5 w-fit font-semibold py-2 rounded-lg hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit For Review"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddButton;
