import React, { useState } from "react";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hi! I’m your Resume Ranker Assistant. Ask me how to use the platform.",
    },
  ]);
  const [input, setInput] = useState("");

  const getBotResponse = (msg) => {
    msg = msg.toLowerCase();

    if (msg.includes("upload")) return "📄 Click 'Upload Resume' and select a PDF or DOCX file.";
    if (msg.includes("rank")) return "📊 Resumes are ranked based on skills, experience, and JD matching.";
    if (msg.includes("format")) return "✅ Supported formats: PDF and DOCX.";
    if (msg.includes("improve")) return "🚀 Use keywords from the job description to improve ranking.";

    return "🤖 I can help with resume upload, ranking, and tips!";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages([
      ...messages,
      { sender: "user", text: input },
      { sender: "bot", text: getBotResponse(input) },
    ]);
    setInput("");
  };

  return (
    <>
      {/* Chat Icon */}
      <div style={styles.chatIcon} onClick={() => setOpen(!open)}>
        💬
      </div>

      {/* Chat Window */}
      {open && (
        <div style={styles.chatbox}>
          <div style={styles.header}>
            Resume Ranker Assistant
            <span style={styles.close} onClick={() => setOpen(false)}>✖</span>
          </div>

          <div style={styles.messages}>
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  ...styles.message,
                  alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                  background: msg.sender === "user" ? "#DCF8C6" : "#F1F1F1",
                }}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div style={styles.inputArea}>
            <input
              style={styles.input}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
            />
            <button style={styles.button} onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  chatIcon: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "55px",
    height: "55px",
    borderRadius: "50%",
    background: "#007bff",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "26px",
    cursor: "pointer",
    zIndex: 1000,
  },
  chatbox: {
    position: "fixed",
    bottom: "85px",
    right: "20px",
    width: "320px",
    height: "420px",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    zIndex: 1000,
  },
  header: {
    padding: "10px",
    background: "#007bff",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
  },
  close: {
    cursor: "pointer",
  },
  messages: {
    flex: 1,
    padding: "10px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
  },
  message: {
    padding: "8px",
    margin: "4px 0",
    borderRadius: "8px",
    maxWidth: "80%",
  },
  inputArea: {
    display: "flex",
    padding: "8px",
  },
  input: {
    flex: 1,
    padding: "6px",
  },
  button: {
    marginLeft: "6px",
    cursor: "pointer",
  },
};

export default Chatbot;
