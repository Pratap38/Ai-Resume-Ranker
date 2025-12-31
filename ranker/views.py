from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from PyPDF2 import PdfReader
import docx
import requests
import json

# ---------------------------
# ✅ Replace with your Gemini API key
# ---------------------------
GEMINI_API_KEY = "#"

# ---------------------------
# Correct model endpoint
# ---------------------------
GEMINI_MODEL = "gemini-1.5-flash"  # Replace with an available model from your account
GEMINI_URL = f"https://generativelanguage.googleapis.com/v1beta2/models/{GEMINI_MODEL}:generateText"

# ---------------------------
# Helper function to call Gemini API
# ---------------------------
def analyze_resume(resume_text, job_role):
    # 1. Update to the late 2025 frontier model
    # Use 'gemini-3-flash-preview' for PhD-level reasoning or 'gemini-2.5-flash' for stability
    GEMINI_MODEL = "gemini-3-flash-preview" 
    GEMINI_URL = f"https://generativelanguage.googleapis.com/v1beta/models/{GEMINI_MODEL}:generateContent"

    prompt_text = f"""
    You are an expert recruiter. Analyze the following resume for the job role: {job_role}
    Resume Text: {resume_text}
    Return strictly in JSON format with these keys: score, strengths, missing_skills, improvement_tips.
    """

    payload = {
        "contents": [{
            "parts": [{"text": prompt_text}]
        }],
        "generationConfig": {
            "response_mime_type": "application/json",
            "temperature": 1.0  # Note: Gemini 3.0 is optimized for 1.0 temperature
        }
    }

    headers = {"Content-Type": "application/json"}

    try:
        # Use v1beta endpoint with your API Key
        response = requests.post(f"{GEMINI_URL}?key={GEMINI_API_KEY}", headers=headers, json=payload)
        
        if response.status_code == 200:
            data = response.json()
            # New structure: candidates -> content -> parts -> text
            raw_content = data['candidates'][0]['content']['parts'][0]['text']
            return json.loads(raw_content)
        else:
            return {"error": f"Gemini API Error {response.status_code}", "details": response.text}

    except Exception as e:
        return {"error": "Python Exception", "details": str(e)}
# ---------------------------
# Upload resume endpoint
# ---------------------------
@csrf_exempt
def upload_resume(request):
    if request.method != "POST":
        return JsonResponse({"status": "error", "message": "Only POST allowed"}, status=405)

    name = request.POST.get("name")
    job_role = request.POST.get("job_role")
    resume_file = request.FILES.get("resume")

    if not (name and job_role and resume_file):
        return JsonResponse({"status": "error", "message": "All fields are required"}, status=400)

    # --- Extract text from resume ---
    resume_text = ""
    try:
        if resume_file.name.endswith(".pdf"):
            reader = PdfReader(resume_file)
            for page in reader.pages:
                resume_text += page.extract_text() + "\n"
        elif resume_file.name.endswith(".docx"):
            doc = docx.Document(resume_file)
            for para in doc.paragraphs:
                resume_text += para.text + "\n"
        else:
            return JsonResponse({"status": "error", "message": "Unsupported file type"}, status=400)

        print("Extracted resume text (first 200 chars):", resume_text[:200])
    except Exception as e:
        return JsonResponse({"status": "error", "message": "Failed to read resume", "details": str(e)}, status=500)

    # --- Call Gemini API ---
    analysis = analyze_resume(resume_text, job_role)
    print("Gemini API analysis:", analysis)

    return JsonResponse({
        "status": "success",
        "name": name,
        "job_role": job_role,
        "analysis": analysis
    })

# ---------------------------
# Simple test endpoint
# ---------------------------
def test_api(request):
    return JsonResponse({"status": "success", "message": "Test API working"})
