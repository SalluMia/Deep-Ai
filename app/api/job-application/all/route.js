import JobApplication from "@/model/jobApplicationModel";
import { connectToDB } from "@/utils/database";

export const GET = async (req) => {
    try {
        await connectToDB();

        const url = new URL(req.url);
        const searchParams = new URLSearchParams(url.search);

        const page = parseInt(searchParams.get("page")) || 1;
        const limit = parseInt(searchParams.get("limit")) || 10;

        const skip = (page - 1) * limit;

        const jobApplications = await JobApplication.find().skip(skip).limit(limit);

        const totalApplicationCount = await JobApplication.countDocuments();

        const totalPages = Math.ceil(totalApplicationCount / limit);

        const responseObj = {
            jobApplications,
            pagination: {
                totalApplicationCount,
                totalPages,
                currentPage: page,
            },
        };

        return new Response(JSON.stringify(responseObj), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({ message: 'An error occurred while fetching job Applications.' }), {
            status: 500,
        });
    }
};
