import JobCreationForm from '@/components/core/job/JobCreationForm'
import React from 'react'
import Link from 'next/link'

const CreateJob = () => {
    return (
        <div className='w-full h-full mx-auto'>
            {/* Bread Crumb */}
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
                    new vacancies
                </h1>
            </div>

            <JobCreationForm types="create" />
        </div>
    )
}

export default CreateJob
