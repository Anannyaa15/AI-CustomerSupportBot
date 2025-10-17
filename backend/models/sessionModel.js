import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
  sessionId: String,
  conversation: [
    {
      role: String,
      content: String,
    },
  ],
});

export default mongoose.model("Session", sessionSchema);
