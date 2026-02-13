import express from "express";
import cors from "cors";
import axios from "axios";
import OpenAI from "openai";
let OPENAI_API_KEY= "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";
const client = new OpenAI({
  apiKey : OPENAI_API_KEY
});

const app = express();

app.use(cors());         
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", async(req, res)=>{
  const response = await client.responses.create({
   
  model: "gpt-4.1",
  input: "Write a short bedtime story about a unicorn.",
});

console.log(response.output_text);
})


app.get("/chat", async (req, res) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-5-nano",
        messages: "hello"
      },
      {
        headers: {
          Authorization: `Bearer ${apikey}`,
          "Content-Type": "application/json"
        }
      }
    );
    console.log(response.data);
    res.json(response.data.choices[0].message);
  } catch (err) {
    res.status(500).json(err.response?.data || err.message);
  }
});

app.listen(5000, ()=>console.log("server running"));
