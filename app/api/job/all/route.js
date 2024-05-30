import Job from "@/model/jobModel";
import { connectToDB } from "@/utils/database";

export const GET = async (req) => {
  try {
    await connectToDB();

    // const url = new URL(req.url);
    // const searchParams = new URLSearchParams(url.search);

    // const page = parseInt(searchParams.get("page")) || 1;
    // const limit = parseInt(searchParams.get("limit")) || 10;


    // const skip = (page - 1) * limit;

    const jobs = await Job.find();

    // const totalJobsCount = await Job.countDocuments();

    // const totalPages = Math.ceil(totalJobsCount / limit);

    const responseObj = {
      jobs,
      // pagination: {
      //   totalJobsCount,
      //   totalPages,
      //   currentPage: page,
      // },
    };

    return new Response(JSON.stringify(responseObj), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ message: 'An error occurred while fetching jobs.' }), {
      status: 500,
    });
  }
};

export const dynamic = 'force-dynamic';