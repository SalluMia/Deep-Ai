'use client'
import React, { useState } from 'react'
import EllipsisMenu from '@/components/core/EllipsisMenu'
import JobVacancyRow from '@/components/core/job/JobVacancyRow';
import { EllipsisVerticalIcon } from '@heroicons/react/24/solid';
import { useQuery } from 'react-query';
import Link from 'next/link';
import Pagination from '@/components/core/pagination/Pagination';

const fetchJobs = async () => {
    try {
        const response = await fetch(`/api/job/all`, { cache: 'no-store' });
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

const JobPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    const menuOptions = [
        { label: 'Create new job', href: '/dashboard/jobs-vacancies/create-job', type: "link" },
        { label: 'Archive', href: '/dashboard/jobs-vacancies/archives', type: "link" }
    ];

    const { data: allJobs, isLoading: isFetchingJobs } = useQuery(
        ['allJobs'],
        () => fetchJobs(),
    );

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentJobs = allJobs?.jobs?.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className='w-full h-full mx-auto'>
            <div className='flex justify-between items-center'>
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
                    <h1
                        className="font-varino text-lg  text-center"
                        style={{
                            background: "linear-gradient(to bottom, #00A7E1, #0081AD)",
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                        }}
                    >
                        jobs vacancies
                    </h1>
                </div>
                {/* Elipsis Menu */}
                <EllipsisMenu options={menuOptions} >
                    <EllipsisVerticalIcon className="h-6 w-6 text-white" />
                </EllipsisMenu>
            </div>

            {/* MAIN JOB LIST */}
            {
                isFetchingJobs
                    ? <h1> Loading... </h1>
                    : (
                        <div className='flex flex-col space-y-4 lg:items-center my-6 mb-6 overflow-x-auto'>
                            <div className="max-w-full h-full"> {/* Add a container to set a maximum width */}
                                {
                                    currentJobs?.map(({ _id, jobTitle, salary, jobType, createdAt, city }, index) => (
                                        <JobVacancyRow
                                            jobId={_id}
                                            key={index}
                                            index={index}
                                            jobTitle={jobTitle}
                                            salary={salary}
                                            jobType={jobType}
                                            city={city}
                                            createdAt={createdAt}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    )
            }
            <div className='flex justify-between items-center w-full mx-auto'>

                <div className='w-2/12'>
                    <p className='text-base text-white font-thin'>Current Page: {currentPage}</p>

                </div>

                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={allJobs?.jobs?.length}
                    paginate={paginate}
                    currentPage={currentPage}
                />

                <div className='w-2/12'>
                    <p className='text-base text-white font-thin'>Items Per page: {postsPerPage}</p>
                </div>

            </div>

        </div>
    )
}

export default JobPage