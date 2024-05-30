import mongoose from "mongoose";
import { models } from "mongoose";

const contact = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

const ContactUs = models?.Contact || mongoose.model("Contact", contact);

export default ContactUs;
