const formData = new FormData();
formData.append("name", name);
formData.append("job_role", jobRole);
formData.append("resume", resume);

const response = await fetch("http://127.0.0.1:8000/api/upload-resume/", {
  method: "POST",
  body: formData,
});
const data = await response.json();
setAnalysis(data.analysis);
