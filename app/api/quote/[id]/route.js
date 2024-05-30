import Quote from "@/model/quoteModel";
import { connectToDB } from "@/utils/database";

export const DELETE = async (req, { params }) => {
  try {
    const { id } = params;
    await connectToDB();
    const quote = await Quote.findById(id);

    if (!quote) {
      return new Response(
        JSON.stringify({ message: "quote not found" }, { status: 404 })
      );
    }
    // const filePath = path.join(process.cwd(), 'public/uploads', category.img);
    // await unlink(filePath);

    await Quote.findByIdAndDelete(id);
    return new Response(
      JSON.stringify({ message: "Quote deleted successfully" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error occurred:", error);
    return new Response(
      JSON.stringify({ message: "Failed to delete category" }, { status: 500 })
    );
  }
};
export const GET = async (req, { params }) => {
  try {
    const { id } = params;

    const getQuote = await Quote.findById(id);

    return new Response(JSON.stringify({ Quote: getQuote }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify("Failed to fetch quotes information", { status: 500 })
    );
  }
};
