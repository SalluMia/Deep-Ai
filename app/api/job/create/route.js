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

export const POST = async (req) => {
    try {
        const jobInput = await req.json();

        if (areAllValuesEmpty(jobInput)) {
            return new Response(
                JSON.stringify({ error: "Missing required fields." }),
                { status: 400 }
            );
        }

        await connectToDB();

        const jobDetails = new Job(jobInput)

        await jobDetails.save();

        return new Response(JSON.stringify({
            message: "Job created Successfully!!",
        }), { status: 201 })

    } catch (error) {
        console.log(error.message);
        return new Response(JSON.stringify({ message: 'An error occurred while creating job. ' + error.message }), {
            status: 500,
        });
    }
}

// export const GET = async (req) => {
//     try {
//         await connectToDB();
//         const jobs = await Job.find();
//         return new Response(JSON.stringify(jobs), { status: 200 });

//     } catch (error) {
//         console.log(error);
//         return new Response(JSON.stringify({ message: 'An error occurred while fetching jobs.' }), {
//             status: 500,
//         });
//     }
// };

