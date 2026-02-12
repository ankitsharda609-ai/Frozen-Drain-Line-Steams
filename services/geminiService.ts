
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the "Frozen Pipe Expert" for Frozen Drain Line Steam, a sewer thawing service in West Fargo, ND.
Your goal is to help users diagnose if their drain lines are frozen and provide immediate safety advice while they wait for a professional.
Be professional, empathetic, and urgent.
Context:
- Address: 100 Sheyenne St, West Fargo, ND 58078
- Phone: (844) 340-6413
- Services: Steam thawing for drains, sewers, and vent stacks.
- Safety Advice: Never use an open flame to thaw a pipe. Don't use excessive chemicals which can damage frozen pipes.
- If a user sounds like they have a major backup, tell them to call (844) 340-6413 immediately.
Keep responses concise and helpful.
`;

export const getGeminiResponse = async (userMessage: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.9,
      },
    });
    return response.text || "I'm sorry, I'm having trouble processing your request. Please call us directly at (844) 340-6413.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently unavailable. Please call (844) 340-6413 for immediate emergency assistance.";
  }
};
