import Job from "@/model/jobModel";
import { connectToDB } from "@/utils/database";

export const GET = async (req, { params }) => {
    try {
        const { jobId } = params;

        if (!jobId) {
            return new Response(JSON.stringify({ error: "Job ID is missing." }), { status: 400 });
        }

        await connectToDB();
        const job = await Job.findById(jobId);

        if (!job) {
            return new Response(JSON.stringify({ message: 'Job not found' }), { status: 404 });
        }

        return new Response(JSON.stringify(job), { status: 200 });
    } catch (error) {
        console.log(error.message);
        return new Response(JSON.stringify({ message: 'An error occurred while fetching job. ' + error.message }), {
            status: 500,
        });
    }
};
