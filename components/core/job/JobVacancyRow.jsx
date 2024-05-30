import React from 'react';
import EllipsisMenu from '../EllipsisMenu';
import { useQueryClient } from 'react-query';
import toast from "react-hot-toast";
import moment from 'moment';
import FlatVector from '../../../public/images/FlatVector.png'
import Image from 'next/image';
import { EllipsisVerticalIcon } from '@heroicons/react/24/solid';

const JobVacancyRow = ({ index, jobTitle, city, salary, jobType, createdAt, jobId }) => {
    const queryClient = useQueryClient();

    const deleteItem = async () => {
        try {
            const response = await fetch(`/api/job/remove/${jobId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                toast.success('Job deleted successfully', { duration: 4000 })
                queryClient.invalidateQueries('allJobs');
            } else {
                toast.error('Failed to delete job', { duration: 4000 })
            }
        } catch (error) {
            toast.error('Error deleting job:', { duration: 4000 })
        }
    };

    const menuOptions = [
        { label: 'Update', href: `/dashboard/jobs-vacancies/update-job/${jobId}`, type: "link" },
        { label: 'View', href: `/dashboard/jobs-vacancies/job-description/${jobId}`, type: "link" },
        { label: 'Delete', type: "button", onClick: deleteItem },
    ];

    return (
        <div className='flex-none rounded-full bg-gradient-to-b from-[#EC66B7] to-[#2D5887] w-[70rem] p-1 h-[5rem] my-4'>
            <table className="relative w-full h-full bg-[#111424] rounded-full text-white">
                <tbody>
                    <tr>
                        <td className='text-center px-4'>{index}</td>
                        <td className='text-center'>{jobTitle}</td>
                        <td className='text-center'>{city}</td>
                        <td className='text-center'>Rs {salary} a month</td>
                        <td className='text-center'>{jobType}</td>
                        <td className='text-center'>Urgent Hiring</td>
                        <td className='text-center'>{moment(createdAt).startOf('day').fromNow()}</td>
                        <td className='text-center px-4'>
                            <EllipsisMenu options={menuOptions} >
                                <EllipsisVerticalIcon className="h-6 w-6 text-white" />
                            </EllipsisMenu>
                        </td>
                    </tr>
                </tbody>
                {/* <Image
                    alt=""
                    src={FlatVector}
                    className="w-full h-full absolute top-0"
                /> */}
            </table>
        </div>
    );
};

export default JobVacancyRow;
