import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });


const userPrompt = `What is 1+1`


groq.chat.completions
  .create({
    messages: [
      {
        role: "system",
        content:
          "You are a prompt engineering expert. Enhance the given prompt to be more specific, detailed, and effective.",
      },
      {
        role: "user",
        content: userPrompt,
      },
    ],
    model: "llama-3.3-70b-versatile",
  })
  .then((data) => {
    console.log(data.choices);
  });
