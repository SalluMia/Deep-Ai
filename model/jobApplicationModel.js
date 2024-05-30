import { Schema, model, models } from 'mongoose';

const JobApplicationSchema = new Schema({
    fullName: { type: String, required: true },
    email: {
        type: String,
        required: true
    },
    qualification: { type: String, required: true },
    phNumber: { type: Number, required: true },
    dept: { type: String, enum: ["UI/UX Design", "Frontend", "Laravel", "Flutter", 'MERN Stack', 'Python/AI', 'Wordpress', 'SEO', 'Q/A', 'Digital Marketing', 'Business Development'], required: true },
    portfolioSite: { type: String, required: true },
    resume: {
        fileId: String,
        fileLink: String
    },
    coverLetter: {
        fileId:String,
        fileLink: String
    }
},
    {
        timestamps: true,
        versionKey: false
    },
);


const JobApplication = models?.JobApplication || model("JobApplication", JobApplicationSchema);

export default JobApplication;
