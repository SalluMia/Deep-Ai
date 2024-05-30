import { connectToDB } from "@/utils/database";
import Quote from "@/model/quoteModel";
import ContactUs from "@/model/contactModel";
import { emailSent } from "@/utils/sendMail";
import { contactUsEmail } from "@/utils/emailTemplates";
export const POST = async (req, { params }) => {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }
    await connectToDB();

    const uploadDetails = new ContactUs({
      name,
      email,
      message,
    });

    await uploadDetails.save();
    let userDetails = {
      name,
      email,
      message,
    };
    const output = contactUsEmail(userDetails);

    await emailSent(
      email,
      "info@alrighttech.com",
      ["hr@alrighttech.com","waqarahmad.dev@gmail.com"],
      output,
      "Contact-us Inquiry"
    );
    return new Response(
      JSON.stringify({ message: "Success", data: uploadDetails }),
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error occurred:", error);
    return new Response("Failed to fetch information", { status: 500 });
  }
};

export const GET = async (req, { params }) => {
  try {
    await connectToDB();
    const contact = await ContactUs.find();

    return new Response(JSON.stringify({ contact }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify("Failed to fetch quotes information", { status: 500 })
    );
  }
};
