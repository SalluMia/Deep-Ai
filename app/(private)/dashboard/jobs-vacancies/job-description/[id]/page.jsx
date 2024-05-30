import React from 'react';
import Link from 'next/link';

const fetchJobData = async (jobId) => {

    const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/job/single/${jobId}`, { cache: 'no-store' })
    const data = await resp.json();

    if (resp.status === 500 || resp.status === 400 || resp.status === 404) {
        throw new Error(data.message)
    } else {
        return data;
    }

}

const JopUpdatePage = async ({ params }) => {
    const jobId = params?.id
    const singleJobData = await fetchJobData(jobId);

    const { jobType, jobTitle, salary, country, city, workExperience, citty, state, zip, jobDescription, jobRequirement } = singleJobData;

    return (
        <div className='w-full h-full mx-auto'>

            {/* Bread crumb it must be component */}
            <div className='flex items-center'>
                <Link
                    href="/dashboard"
                    className="font-varino text-lg  text-center"
                    style={{
                        background: "linear-gradient(to bottom, white, gray)",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                    }}
                >
                    Dashboard /
                </Link>
                <Link
                    href="/dashboard/jobs-vacancies"
                    className="font-varino text-lg  text-center"
                    style={{
                        background: "linear-gradient(to bottom, white, gray)",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                    }}
                >
                    jobs vacancies
                </Link>
                <h1
                    className="font-varino text-lg  text-center"
                    style={{
                        background: "linear-gradient(to bottom, #00A7E1, #0081AD)",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                    }}
                >
                    / job description
                </h1>
            </div>

            <div className='mt-[2rem] text-white font-monosans space-y-4'>
                <p className='text-sm'>{jobType}</p>
                <p className='font-semibold text-lg'>{jobTitle}</p>

                <div className='flex space-x-4'>
                    <p className='text-sm'>{country},</p>
                    <p className='text-sm'>{city},</p>
                    <p className='text-sm'>{state},</p>
                    <p className='text-sm'>{zip},</p>
                </div>
                <p className='text-sm'>Rs {salary} a month</p>
                <p className='text-sm'>Urgent Hiring</p>
                <p>Job Description:</p>
                <p className='w-7/12'>
                    {jobDescription}
                </p>
                <p>Job Requirement:</p>
                <p className='w-7/12'>
                    {jobRequirement}
                </p>


            </div>

        </div>
    )
}

export default JopUpdatePage
