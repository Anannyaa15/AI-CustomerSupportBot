import axios from "axios";
import dotenv from "dotenv";
import Session from "../models/sessionModel.js";

dotenv.config();

export const handleChat = async (req, res) => {
  try {
    const { sessionId, message } = req.body;

    let session = await Session.findOne({ sessionId });
    if (!session) {
      session = await Session.create({ sessionId, conversation: [] });
    }

    session.conversation.push({ role: "user", content: message });

    // ✅ Call Hugging Face text-generation model
    const response = await axios.post(
      "https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium",
      { inputs: message },
      {
        headers: {
          Authorization: `Bearer ${process.env.HF_API_KEY}`,
        },
      }
    );

    const aiMessage = response.data[0]?.generated_text || "Sorry, I couldn't generate a response.";

    session.conversation.push({ role: "assistant", content: aiMessage });
    await session.save();

    res.json({ reply: aiMessage });
  } catch (error) {
    console.error("❌ Hugging Face Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Server error: " + error.message });
  }
};