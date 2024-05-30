"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";

const JobCreationForm = ({ dataToUpdate, type }) => {

    const isCreate = type === 'create'
    const isUpdate = type === 'update';
    let jobId = dataToUpdate?._id;

    const [formErrors, setFormErrors] = useState({});
    const [isUploading, setIsUploading] = useState(false);

    const jobTypeList = [
        { name: "None" },
        { name: "Full time" },
        { name: "On Site" },
        { name: "Remote" },
        { name: "Internship" },
    ];

    const jobTitleList = [
        { name: "None" },
        { name: "UI/UX Design" },
        { name: "Frontend" },
        { name: "Laravel" },
        { name: "Flutter" },
        { name: "MERN Stack" },
        { name: "Python/AI" },
        { name: "Wordpress" },
        { name: "SEO" },
        { name: "Q/A" },
        { name: "Digital Marketing" },
        { name: "Business Development" },
    ];

    const initialState = {
        jobTitle: dataToUpdate?.jobTitle || "",
        salary: dataToUpdate?.salary || "",
        workExperience: dataToUpdate?.workExperience || "",
        jobType: dataToUpdate?.jobType || "None",
        city: dataToUpdate?.city || "",
        state: dataToUpdate?.state || "",
        country: dataToUpdate?.country || "",
        zip: dataToUpdate?.zip || "",
        jobDescription: dataToUpdate?.jobDescription || "",
        jobRequirement: dataToUpdate?.jobRequirement || ""
    }

    const [formFields, setFormFields] = useState(initialState);
    const { jobTitle, salary, jobType, workExperience, city, state, country, zip, jobDescription, jobRequirement } = formFields;

    ///////////  Validation Function ////////////
    const validateForm = () => {
        const errors = {};

        // Validate other fields as needed
        if (!jobTitle === "None") {
            errors.jobTitle = "Job Title is required";
        }

        if (jobType === "None") {
            errors.jobType = "Please select a Job Type";
        }

        if (!city.trim()) {
            errors.city = "City is required";
        }

        if (!state.trim()) {
            errors.state = "state is required";
        }

        if (!zip.trim()) {
            errors.zip = "zip is required";
        }

        if (!jobDescription.trim()) {
            errors.jobDescription = "Job Description is required";
        }

        if (!jobRequirement.trim()) {
            errors.jobRequirement = "Job Requirement is required";
        }

        if (!country.trim()) {
            errors.country = "Country is required";
        }

        if (!salary.trim()) {
            errors.salary = "Salary is required";
        } else if (isNaN(Number(salary))) {
            errors.salary = "Salary must be a number";
        }

        if (!workExperience.trim()) {
            errors.workExperience = "Work Experience is required";
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0; // Return true if no errors
    };

    const handleInputChange = (event, fieldName) => {
        const { value } = event.target;
        setFormFields((prevFormData) => ({
            ...prevFormData,
            [fieldName]: value,
        }));
    };

    async function createJob() {

        if (!validateForm()) {
            return;
        }
        const toastId = toast.loading('Uploading please wait !!');

        try {
            const res = await fetch("/api/job/create",
                {
                    method: 'POST',
                    body: JSON.stringify(formFields)
                }
            );
            const data = await res.json();
            if (res.status === 201) {
                toast.dismiss(toastId);
                toast.success(
                    "Job Creation Success !",
                    { duration: 4000 }

                );
                setFormFields(initialState)

            } else {
                toast.dismiss(toastId);
                toast.error(
                    data.error,
                    { duration: 4000 }
                )

            }
        } catch (error) {
            toast.dismiss(toastId);
            console.error("Error submitting form:", error);
        } finally {
            setIsUploading(false);
        }


    }

    async function updateJob() {
        const toastId = toast.loading('Uploading please wait !!', { duration: 3000 });

        try {
            const res = await fetch(`/api/job/update/${jobId}`,
                {
                    method: 'PUT',
                    body: JSON.stringify(formFields)
                }
            );
            const data = await res.json();
            if (res.status === 200) {
                toast.dismiss(toastId);
                toast.success(
                    "Job Updated Successfully !",
                    { duration: 4000 }

                );

            } else {
                toast.dismiss(toastId);
                toast.error(
                    data.error,
                    { duration: 4000 }
                )

            }
        } catch (error) {
            toast.dismiss(toastId);
            console.error("Error submitting form:", error);
        } finally {
            setIsUploading(false);
        }

    }

    /////////////   Form Submitting ///////////////////////
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isCreate) {
            await createJob();
        } else if (isUpdate) {
            await updateJob();
        }
    };

    return (
        <>
            <section className="px-5 lg:px-32  text-center my-6">
                {/* Form Inputs */}
                <div >
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-1 justify-start items-start">
                            <label
                                htmlFor=""
                                className="text-center text-white text-xl ms-4 font-normal font-varino capitalize leading-normal"
                                style={{
                                    background: "linear-gradient(to bottom, white, gray)",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                }}
                            >
                                Job Title
                            </label>

                            <select
                                value={jobTitle}
                                name="jobTitle"
                                onChange={(e) => handleInputChange(e, 'jobTitle')}
                                className={`rounded-3xl border text-white border-white justify-start items-center p-[.8rem] w-full bg-transparent focus:outline-white  focus:border-white ${formErrors.jobType ? "border-red-500" : ""
                                    }`}
                            >
                                {jobTitleList.map((option, index) => (
                                    <option
                                        key={index}
                                        value={option.name}
                                        className="bg-[#111424] text-white rounded"
                                    >
                                        {option.name}
                                    </option>
                                ))}
                            </select>
                            {formErrors.jobTitle && (
                                <p className="text-red-500">{formErrors.jobTitle}</p>
                            )}
                        </div>

                        <div className="grid lg:grid-cols-2 my-7 gap-5">
                            <div className="flex flex-col gap-1 justify-start items-start">
                                <label
                                    className="text-center text-white text-xl ms-4 font-normal font-varino capitalize leading-normal"
                                    style={{
                                        background: "linear-gradient(to bottom, white, gray)",
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    Salary
                                </label>
                                <input
                                    type="text"
                                    value={salary}
                                    name="salary"
                                    onChange={(e) => handleInputChange(e, 'salary')}
                                    className={`rounded-3xl border text-white border-white justify-start items-center p-[.8rem] w-full  bg-transparent focus:outline-white  focus:border-white ${formErrors.salary ? "border-red-500" : ""
                                        }`}
                                    placeholder="Salary"
                                />
                                {formErrors.salary && (
                                    <p className="text-red-500">{formErrors.salary}</p>
                                )}
                            </div>

                            <div className="flex flex-col gap-1 justify-start items-start">
                                <label
                                    className="text-center text-white text-xl ms-4 font-normal font-varino capitalize leading-normal"
                                    style={{
                                        background: "linear-gradient(to bottom, white, gray)",
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    Work Experience
                                </label>
                                <input
                                    type="text"
                                    value={workExperience}
                                    name="workExperience"
                                    onChange={(e) => handleInputChange(e, 'workExperience')}
                                    className={`rounded-3xl border text-white border-white justify-start items-center p-[.8rem] w-full  bg-transparent focus:outline-white  focus:border-white ${formErrors.workExperience ? "border-red-500" : ""}`}
                                    placeholder="Work Experience"
                                />
                                {formErrors.workExperience && (
                                    <p className="text-red-500">{formErrors.workExperience}</p>
                                )}
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 my-7 gap-5">
                            <div className="flex flex-col gap-1 justify-start items-start">
                                <label
                                    htmlFor=""
                                    className="text-center  text-white text-xl ms-4 font-normal font-varino capitalize leading-normal"
                                    style={{
                                        background: "linear-gradient(to bottom, white, gray)",
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    Country
                                </label>
                                <input
                                    type="text"
                                    value={country}
                                    name="country"
                                    onChange={(e) => handleInputChange(e, 'country')}
                                    className={`rounded-3xl text-white border border-white justify-start items-center p-[.8rem] w-full  bg-transparent focus:outline-white  focus:border-white ${formErrors.country ? "border-red-500" : ""
                                        }`}
                                    placeholder="Country"
                                />
                                {formErrors.country && (
                                    <p className="text-red-500">{formErrors.country}</p>
                                )}
                            </div>

                            <div className="flex flex-col gap-1 justify-start items-start">
                                <label
                                    htmlFor=""
                                    className="text-center text-white text-xl ms-4 font-normal font-varino capitalize leading-normal"
                                    style={{
                                        background: "linear-gradient(to bottom, white, gray)",
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    Job Type
                                </label>

                                <select
                                    value={jobType}
                                    name="jobType"
                                    onChange={(e) => handleInputChange(e, 'jobType')}
                                    className={`rounded-3xl border text-white border-white justify-start items-center p-[.8rem] w-full bg-transparent focus:outline-white  focus:border-white ${formErrors.jobType ? "border-red-500" : ""
                                        }`}
                                >
                                    {jobTypeList.map((option, index) => (
                                        <option
                                            key={index}
                                            value={option.name}
                                            className="bg-[#111424] text-white rounded"
                                        >
                                            {option.name}
                                        </option>
                                    ))}
                                </select>
                                {formErrors.jobType && (
                                    <p className="text-red-500">{formErrors.jobType}</p>
                                )}
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 my-7 gap-5">
                            <div className="flex flex-col gap-1 justify-start items-start">
                                <label
                                    htmlFor=""
                                    className="text-center text-white text-xl ms-4 font-normal font-varino capitalize leading-normal"
                                    style={{
                                        background: "linear-gradient(to bottom, white, gray)",
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    City
                                </label>
                                <input
                                    type="text"
                                    value={city}
                                    name="city"
                                    onChange={(e) => handleInputChange(e, 'city')}
                                    className={`rounded-3xl text-white border border-white justify-start items-center p-[.8rem] w-full  bg-transparent focus:outline-white  focus:border-white ${formErrors.city ? "border-red-500" : ""
                                        }`}
                                    placeholder="City"
                                />
                                {formErrors.city && (
                                    <p className="text-red-500">{formErrors.city}</p>
                                )}
                            </div>
                            <div className="flex flex-col gap-1 justify-start items-start">
                                <label
                                    htmlFor=""
                                    className="text-center  text-white text-xl ms-4 font-normal font-varino capitalize leading-normal"
                                    style={{
                                        background: "linear-gradient(to bottom, white, gray)",
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    State
                                </label>
                                <input
                                    type="text"
                                    value={state}
                                    name="state"
                                    onChange={(e) => handleInputChange(e, 'state')}
                                    className={`rounded-3xl text-white border border-white justify-start items-center p-[.8rem] w-full  bg-transparent focus:outline-white  focus:border-white ${formErrors.state ? "border-red-500" : ""}`}
                                    placeholder="Enter state e.g: Punjab"
                                />
                                {formErrors.state && (
                                    <p className="text-red-500">{formErrors.state}</p>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col gap-1 justify-start items-start">
                            <label
                                htmlFor=""
                                className="text-center  text-white text-xl ms-4 font-normal font-varino capitalize leading-normal"
                                style={{
                                    background: "linear-gradient(to bottom, white, gray)",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                }}
                            >
                                Zip
                            </label>
                            <input
                                type="text"
                                value={zip}
                                name="zip"
                                onChange={(e) => handleInputChange(e, 'zip')}
                                className={`rounded-3xl text-white border border-white justify-start items-center p-[.8rem] w-full  bg-transparent focus:outline-white  focus:border-white ${formErrors.zip ? "border-red-500" : ""}`}
                                placeholder="Enter zip e.g: 4000"
                            />
                            {formErrors.zip && (
                                <p className="text-red-500">{formErrors.zip}</p>
                            )}
                        </div>

                        {/* Input for Job Description */}
                        <div className="flex flex-col gap-1 justify-start items-start my-10">
                            <label
                                htmlFor=""
                                className="text-center text-white text-xl ms-4 font-normal font-varino capitalize leading-normal"
                                style={{
                                    background: "linear-gradient(to bottom, white, gray)",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                }}
                            >
                                Job Description
                            </label>
                            <textarea
                                rows={7}
                                value={jobDescription}
                                name="jobDescription"
                                onChange={(e) => handleInputChange(e, 'jobDescription')}
                                type="text"
                                className={`rounded-3xl border text-white border-white justify-start items-center p-[.8rem] w-full  bg-transparent focus:outline-white  focus:border-white ${formErrors.jobDescription ? "border-red-500" : ""
                                    }`}
                                placeholder="Job Description"
                            />
                            {formErrors.jobDescription && (
                                <p className="text-red-500">{formErrors.jobDescription}</p>
                            )}
                        </div>

                        {/* Input for Job Requirement */}
                        <div className="flex flex-col gap-1 justify-start items-start my-10">
                            <label
                                htmlFor=""
                                className="text-center text-white text-xl ms-4 font-normal font-varino capitalize leading-normal"
                                style={{
                                    background: "linear-gradient(to bottom, white, gray)",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                }}
                            >
                                Job Requirement
                            </label>
                            <textarea
                                rows={7}
                                value={jobRequirement}
                                name="jobRequirement"
                                onChange={(e) => handleInputChange(e, 'jobRequirement')}
                                type="text"
                                className={`rounded-3xl border text-white border-white justify-start items-center p-[.8rem] w-full  bg-transparent focus:outline-white  focus:border-white ${formErrors.jobRequirement ? "border-red-500" : ""
                                    }`}
                                placeholder="Job Requirement"
                            />
                            {formErrors.jobRequirement && (
                                <p className="text-red-500">{formErrors.jobDescription}</p>
                            )}
                        </div>

                        <div className=" text-end">
                            <button
                                disabled={isUploading}
                                type="submit"
                                className="text-white bg-[#00A7E1] px-[2.5rem] py-[1rem] rounded-full my-5 lg:my-10"
                            >
                                {isCreate && "Publish Job"}
                                {isUpdate && "Update Job"}
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default JobCreationForm
