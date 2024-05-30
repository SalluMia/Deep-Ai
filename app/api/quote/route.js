import { connectToDB } from "@/utils/database";
import Quote from "@/model/quoteModel";
import { fileUpload } from "@/utils/FileHandler";


export const POST = async (req, { params }) => {

  try {
    const formData = await req.formData();
    const fullname = formData.get('fullname');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const country = formData.get('country');
    const projectType = formData.get('projectType');
    const technology = formData.get('technology');
    const estimatedCost = formData.get('estimatedCost');
    const description = formData.get('description');
    const file = formData.get('file');

    if (!file) {
      return new Response(JSON.stringify({ error: 'No files received.' }), { status: 400 });
    }

    // Validate other fields as needed
    if (
      !fullname ||
      !email ||
      !phone ||
      !country ||
      !projectType ||
      !technology ||
      !estimatedCost ||
      !description
    ) {
      return new Response(
        JSON.stringify({ error: "Missing required fields." }),
        { status: 400 }
      );
    }

    await connectToDB();

    //  file upload function...
    const storedFileLink = (await fileUpload(file)).fileLink;

    const uploadDetails = new Quote({
      fullname,
      email,
      phone,
      country,
      projectType,
      technology,
      estimatedCost,
      description,
      filename: storedFileLink,
    });

    await uploadDetails.save();

    return new Response(JSON.stringify({ message: "Success", uploadDetails }), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error occurred:", error);
    return new Response(JSON.stringify({error: "Failed to fetch information"}), { status: 500 });
  }
};

export const GET = async (req, { params }) => {
  try {
    let page = req.nextUrl.searchParams.get("page");
    let limit = req.nextUrl.searchParams.get("limit");
    let query = Quote.find();
    if (page && limit) {
      const skip = (page - 1) * limit;
      query = query.skip(skip).limit(limit);
    }

    const getAllQuotes = await query;

    return new Response(JSON.stringify({ allQuotes: getAllQuotes }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify("Failed to fetch quotes information", { status: 500 })
    );
  }
};

export const DELETE = async (req, { params }) => {
  try {
    console.log(params);
    const { _id } = await req.json();
    const deleteQuote = await Quote.findByIdAndDelete(_id);
    return new Response(JSON.stringify({ allQuotes: deleteQuote }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify("Failed to fetch quotes information", { status: 500 })
    );
  }
};
