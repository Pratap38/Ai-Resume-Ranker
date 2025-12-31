import React, { useState } from "react";

const Upload = () => {
  const [name, setName] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [resume, setResume] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !jobRole || !resume) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("job_role", jobRole);
    formData.append("resume", resume);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/upload-resume/", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Backend Response:", data);

      setAnalysis(data.analysis || null); // store analysis from backend
      setSubmitted(true);
    } catch (error) {
      console.error("Error sending data to backend:", error);
      alert("Failed to send data. Check backend server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="m-10 p-5">
        <h1 className="font-serif font-bold text-4xl text-blue-950">
          Check Your Score
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex items-center flex-col justify-evenly"
      >
        {/* Upload Section */}
        <div className="p-5 border-2 border-gray-300 bg-white rounded-md">
          <h2 className="text-5xl p-9 uppercase font-bold text-gray-900">
            Upload Your Docs
          </h2>
        </div>

        {/* Name */}
        <div className="flex flex-wrap text-2xl m-4 p-4 text-gray-800">
          <h2 className="mr-3">Name:</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Job Role */}
        <div className="flex flex-wrap text-2xl m-4 p-4 text-gray-800">
          <h2 className="mr-3">Job Role:</h2>
          <input
            type="text"
            value={jobRole}
            onChange={(e) => setJobRole(e.target.value)}
            className="border border-gray-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Resume Upload */}
        <div className="text-2xl text-gray-800">
          <h2 className="p-4">Upload Resume</h2>
          <input
            type="file"
            onChange={(e) => setResume(e.target.files[0])}
            className="border border-gray-400 rounded p-2 bg-white"
          />
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 text-xl rounded hover:bg-blue-700 transition"
          >
            {loading ? "Uploading..." : "Upload"}
          </button>
        </div>
      </form>

      {/* Submitted Details */}
      {submitted && (
        <div className="mt-10 p-6 text-xl text-center bg-gray-100 mx-10 rounded">
          <h2 className="font-bold text-2xl mb-4">Submitted Details</h2>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Job Role:</strong> {jobRole}</p>
          <p><strong>Resume:</strong> {resume?.name}</p>

          {/* Analysis from Backend */}
          {analysis && (
            <div className="mt-6 text-left bg-white p-4 rounded shadow">
              <h3 className="font-bold text-xl mb-2">Analysis Result:</h3>
              <p><strong>Score:</strong> {analysis.score}</p>
              <p><strong>Strengths:</strong> {analysis.strengths?.join(", ")}</p>
              <p><strong>Missing Skills:</strong> {analysis.missing_skills?.join(", ")}</p>
              <p><strong>Improvement Tips:</strong> {analysis.improvement_tips?.join(", ")}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Upload;
