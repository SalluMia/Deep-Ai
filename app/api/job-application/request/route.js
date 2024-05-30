import { connectToDB } from "@/utils/database";
import JobApplication from "@/model/jobApplicationModel";
import { fileUpload } from "@/utils/FileHandler";

export const POST = async (req) => {

    try {

        const formData = await req.formData();
        const fullName = formData.get('fullName');
        const email = formData.get("email");
        const qualification = formData.get("qualification");
        const phNumber = formData.get("phNumber");
        const dept = formData.get("Dept");
        const portfolioSite = formData.get("portfolioSite");

        const resume = formData.get('resumeFile') || null;
        const coverLetter = formData.get('coverLetterFile')|| null;


        if (!resume && !coverLetter) {
            return new Response(JSON.stringify({ error: 'No attachment received.' }), { status: 400 });
        }

        if (
            !fullName ||
            !email ||
            !qualification ||
            !phNumber ||
            !dept ||
            !portfolioSite
        ) {
            return new Response(
                JSON.stringify({ error: "Missing required fields." }),
                { status: 400 }
            );
        }

        if (resume) {
            var resumeData = await fileUpload(resume);
        }

        if (coverLetter) {
            var coverLetterData = await fileUpload(coverLetter);
        }

        await connectToDB();
        const jobApplicationRequest = new JobApplication({
            fullName,
            email,
            qualification,
            phNumber,
            dept,
            portfolioSite,
            resume: resumeData || { fileId: "", fileLink: "" },
            coverLetter: coverLetterData || { fileId: "", fileLink: "" },
        });

        await jobApplicationRequest.save();

        return new Response(JSON.stringify({
            fullName,
            email,
            qualification,
            phNumber,
            dept,
            portfolioSite,
            resumeData,
            coverLetterData
        }), { status: 201 });

    } catch (error) {
        console.log("ERROR", error);
        return new Response(
            JSON.stringify({ error: error.message }),
            { status: 500 }
        );
    }
};
