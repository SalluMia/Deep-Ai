import Job from "@/model/jobModel";
import { connectToDB } from "@/utils/database";

export const DELETE = async (req, {params}) => {
    try {
        const { jobId } = params;

        await connectToDB();
        const deletedJob = await Job.findByIdAndDelete(jobId);

        if (!deletedJob) {
            return new Response(JSON.stringify({ message: 'Job not found' }), { status: 404 });
        }

        return new Response(JSON.stringify({ message: 'Job deleted successfully' }), { status: 200 });

    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({ message: 'An error occurred while deleting job.' }), {
            status: 500,
        });
    }
};
