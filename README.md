AI Customer Support Simulator

Objective:
Simulate customer support interactions using AI for FAQs and escalation scenarios.


Project Overview

This project uses a Large Language Model (LLM) to simulate customer support interactions. The AI can answer FAQs, retain conversational context, and escalate queries to human support when needed.
It can optionally be integrated with a frontend chat interface to make the simulation interactive.

Features
AI-powered FAQ answering
Contextual memory for ongoing sessions
Escalation simulation for unanswered queries
Optional frontend chat interface
Session tracking in the database

Scope of Work
Input: FAQ dataset & customer queries
Memory: Contextual retention of previous messages
Escalation: Suggest human support when queries cannot be answered
Optional: Frontend interface to visualize AI conversations

Technical Stack
Backend: Node.js / Express
API: REST endpoints
LLM: Hugging Face
Database: MongoDB 
Frontend : React.js


Example Request:
POST /api/query
{
  "sessionId": "12345",
  "userMessage": "How do I reset my password?"
}

Example Response:

{
  "response": "To reset your password, click on 'Forgot Password' at login. If this doesn't work, please contact anannyabhati15@gmail.com.",
  "escalationSuggested": false
}

Prompt Documentation
1. System Prompt (AI Instructions)
You are a helpful customer support assistant. 
- Answer FAQs accurately based on the dataset.
- Retain context from previous messages in the session.
- Escalate to human support if the query cannot be answered.
- Summarize conversations when requested.
- Suggest next actions.
Respond politely and professionally.

2. User Query Prompt
User Query: {user_message}
Conversation Context: {previous_messages_in_session}

Answer based on FAQ dataset. Escalate politely if not answerable.

3. Escalation Prompt
The user asked: {user_message}
FAQ dataset does not have an answer.
Respond politely and suggest escalation to a human agent.

4. Summarization Prompt
Conversation Transcript: {conversation_history}
Summarize key points and unresolved queries in 3-5 sentences.

5. Action Suggestion Prompt
Conversation Context: {conversation_history}
Suggest 2-3 next actions, e.g., check another FAQ or escalate.
