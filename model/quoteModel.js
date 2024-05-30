import mongoose from "mongoose";
import { models } from "mongoose";

const quote = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  country: { type: String, required: true },
  projectType: { type: String, required: true },
  technology: { type: String, required: true },
  estimatedCost: { type: String, required: true },
  description: { type: String, required: true },
  filename: { type: String, required: false },
});

const Quote = models?.quote || mongoose.model("quote", quote);

export default Quote;
