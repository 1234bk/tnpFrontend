import React, { useState } from "react";
import axios from "axios";

const Addpost = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    dateOfDrive: "",
    role: "",
    time: "",
    venue: "",
    description: "",
    applyLink: "",
    pdfFile: null,
  });

  const [uploading, setUploading] = useState(false);

  // Handle text input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file input changes
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setFormData({ ...formData, pdfFile: file });
    } else {
      alert("Please select a valid PDF file");
      e.target.value = null;
    }
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.pdfFile) {
      alert("Please upload a PDF file");
      return;
    }

    const token = localStorage.getItem("token");
    const formDataToSend = new FormData();

    // Append text fields
    formDataToSend.append("companyName", formData.companyName);
    formDataToSend.append("role", formData.role);
    formDataToSend.append("dateOfDrive", formData.dateOfDrive);
    formDataToSend.append("time", formData.time);
    formDataToSend.append("venue", formData.venue);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("applyLink", formData.applyLink);

    // Append file
    formDataToSend.append("jdFile", formData.pdfFile);

    setUploading(true);
    try {
      await axios.post("http://localhost:3000/api/addpost", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Post created successfully!");

      // Reset form after success
      setFormData({
        companyName: "",
        dateOfDrive: "",
        role: "",
        time: "",
        venue: "",
        description: "",
        applyLink: "",
        pdfFile: null,
      });
    } catch (err) {
      console.error("Submit error:", err.response?.data || err.message);
      alert("Failed to create post.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex justify-center items-center mt-6">
      <form
        onSubmit={handleSubmit}
        className="w-full border-3 border-[#9B1C1C] max-w-2xl bg-white shadow-lg rounded-xl p-8 space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-[#9B1C1C]">
          Create New Job Post
        </h2>

        {/* Company Name */}
        <div>
          <label className="block text-gray-700 mb-1">Company Name</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#9B1C1C] outline-none"
          />
        </div>

        {/* Role */}
        <div>
          <label className="block text-gray-700 mb-1">Roles Available</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#9B1C1C] outline-none"
          />
        </div>

        {/* Date of Drive */}
        <div>
          <label className="block text-gray-700 mb-1">Date of Drive</label>
          <input
            type="date"
            name="dateOfDrive"
            value={formData.dateOfDrive}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#9B1C1C] outline-none"
          />
        </div>

        {/* Time */}
        <div>
          <label className="block text-gray-700 mb-1">Time</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#9B1C1C] outline-none"
          />
        </div>

        {/* Venue */}
        <div>
          <label className="block text-gray-700 mb-1">Venue</label>
          <input
            type="text"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#9B1C1C] outline-none"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#9B1C1C] outline-none"
          ></textarea>
        </div>

        {/* PDF Upload */}
        <div>
          <label className="block text-gray-700 mb-1">
            Job Description (PDF)
          </label>
          <input
            type="file"
             name="jdLink" 
            onChange={handleFileChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#9B1C1C] outline-none"
            accept="application/pdf"
          />
          {uploading && (
            <p className="text-sm text-gray-500 mt-1">Uploading...</p>
          )}
        </div>

        {/* Apply Link */}
        <div>
          <label className="block text-gray-700 mb-1">Apply Link</label>
          <input
            type="url"
            name="applyLink"
            value={formData.applyLink}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#9B1C1C] outline-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={uploading}
          className="w-full bg-[#9B1C1C] text-white py-3 rounded-lg font-semibold hover:bg-[#7C1515] transition disabled:opacity-50"
        >
          {uploading ? "Submitting..." : "Submit Post"}
        </button>
      </form>
    </div>
  );
};

export default Addpost;
