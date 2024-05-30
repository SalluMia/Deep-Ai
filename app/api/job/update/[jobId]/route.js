import Job from "@/model/jobModel";
import { connectToDB } from "@/utils/database";


function areAllValuesEmpty(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && obj[key] !== '') {
            return false;
        }
    }
    return true;
}

export const PUT = async (req,{params} ) => {
    try {
        const { jobId } = params;

        const jobInput = await req.json();

        if (areAllValuesEmpty(jobInput)) {
            return new Response(
                JSON.stringify({ error: "Missing required fields." }),
                { status: 400 }
            );
        }

        await connectToDB();
        const updatedJob = await Job.findByIdAndUpdate(jobId, { $set: jobInput }, { new: true });

        if (!updatedJob) {
            return new Response(JSON.stringify({ error: 'Job not found' }), { status: 404 });
        }

        return new Response(JSON.stringify(updatedJob), { status: 200 });

    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({ error: 'An error occurred while updating job.' }), {
            status: 500,
        });
    }
};

