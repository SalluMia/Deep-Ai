import JobCreationForm from '@/components/core/job/JobCreationForm';
import React from 'react'
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

    return (
        <div className=''>
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
                    Dashboard/
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
                    jobs vacancies/

                </Link>
                <h1
                    className="font-varino text-lg  text-center"
                    style={{
                        background: "linear-gradient(to bottom, #00A7E1, #0081AD)",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                    }}
                >
                    update vacancies
                </h1>
            </div>
            <JobCreationForm dataToUpdate={singleJobData} type="update" />
        </div>
    )
}

export default JopUpdatePage
