import { Schema, model, models } from 'mongoose';

const JobSchema = new Schema({
    jobTitle: { type: String, required: true },
    jobDescription: {
        type: String,
        required: true
    },
    jobRequirement: {type: String, required: true},

    // Job Information
    salary: {type : Number, required: true },
    jobType: {type: String, enum: ["Full time", "On Site", "Remote", "Internship"], required: true},
    workExperience: {type: String, required: true},
    city: {type : String, required: true },
    state: {type : String, required: true },
    country: {type : String, required: true },
    zip: {type : Number, required: true },
},
    {
        timestamps: true,
        versionKey: false
    },
);


const Job = models?.Job || model("Job", JobSchema);

export default Job;

