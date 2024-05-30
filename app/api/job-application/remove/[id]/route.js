import { connectToDB } from "@/utils/database";
import JobApplication from "@/model/jobApplicationModel";
import { fileDelete } from "@/utils/FileHandler";

export const DELETE = async (req, { params }) => {
    try {
        const { id } = params;

        const url = new URL(req.url);
        const searchParams = new URLSearchParams(url.search);

        const resumeFileId = searchParams.get("resumeFileId");
        const coverLetterFileId = searchParams.get("coverLetterFileId");

        if (resumeFileId && coverLetterFileId && id) {
            await fileDelete(resumeFileId);
            await fileDelete(coverLetterFileId);
            await connectToDB();

            const deletedJobApplicaion = await JobApplication.findByIdAndDelete(id);

            if (!deletedJobApplicaion) {
                return new Response(JSON.stringify({ message: 'Application not found' }), { status: 404 });
            }
            return new Response(JSON.stringify({ message: 'Applicaiton deleted successfully' }), { status: 200 });
        }
        return new Response(JSON.stringify({ message: 'Invalid request parameters.' }), { status: 400 });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({ message: 'An error occurred while deleting Application.' }), {
            status: 500,
        });
    }
};
