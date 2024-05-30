"use client";
import React, { useState, useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import toast from "react-hot-toast";
import { XCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import HeadingMenu from "@/components/MenuComponents/headingMenu/HeadingMenu";
import Tagline from "@/components/MenuComponents/ParagraphTagLine/Tagline";

function ApplicationForm() {
  useEffect(() => {
    Aos.init();
  }, []);

  const List = [
    "UI/UX Design",
    "Frontend",
    "Laravel",
    "Flutter",
    "MERN Stack",
    "Python/AI",
    "Wordpress",
    "SEO",
    "Q/A",
    "Digital Marketing",
    "Business Development",
  ];

  const [selectedResume, setSelectedResume] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phNumber, setPhNumber] = useState("");
  const [qualification, setQualification] = useState("");
  const [dept, setDept] = useState("");
  const [portfolioSite, setPortfolioSite] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isUploading, setIsUploading] = useState(false);

  const allowedFileTypes = [
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/pdf",
  ];

  const handleRemoveResume = () => {
    setSelectedResume(null);
  };

  const handleResumeSelect = (event) => {
    const file = event.target.files[0];
    if (file && allowedFileTypes.includes(file.type)) {
      setSelectedResume(file);
    } else {
      toast.error(
        "Invalid file type for Document. Please upload a DOC, DOCX, or PDF file.",
        {
          duration: 4000,
        }
      );
    }
  };

  const handleDragOverResume = (event) => {
    event.preventDefault();
  };

  const handleDropResume = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedResume(file);
  };

  const handleRemoveCover = () => {
    setCoverLetter(null);
  };

  const handleCoverSelect = (event) => {
    const file = event.target.files[0];
    if (file && allowedFileTypes.includes(file.type)) {
      setCoverLetter(file);
    } else {
      toast.error(
        "Invalid file type for Document. Please upload a DOC, DOCX, or PDF file.",
        {
          duration: 4000,
        }
      );
    }
  };

  const handleDragOverCover = (event) => {
    event.preventDefault();
  };

  const handleDropCover = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setCoverLetter(file);
  };

  const validateForm = () => {
    const errors = {};

    if (!fullName.trim()) {
      errors.fullName = "Full Name is required";
    }

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email address";
    }

    if (!phNumber.trim()) {
      errors.phNumber = "Phone Number is required";
    }

    if (dept === dept[0]) {
      errors.technology = "Please select a Technology";
    }

    if (!qualification.trim()) {
      errors.cost = "Qualification is required";
    }

    if (!portfolioSite.trim()) {
      errors.portfolioSite = "Profolio is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsUploading(true);
    const formData = new FormData();
    formData.append("fullname", fullName);
    formData.append("email", email);
    formData.append("phone", phNumber);
    formData.append("qualification", qualification);
    formData.append("dept", dept);
    formData.append("portfolioSite", portfolioSite);
    formData.append("resume", selectedResume);
    formData.append("coverLetter", coverLetter);

    const toastId = toast.loading("Uploading please wait !!");

    try {
      const res = await fetch("/api/JobApplication", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (res.status === 201) {
        toast.dismiss(toastId);
        toast.success(
          "Form Submitted Successfully, We will get back to you soon  !"
        );
        setFullName("");
        setEmail("");
        setCost("");
        setCountry("");
        setPhoneNumber("");
        setProjectDescription("");
        setProjectType("");
        setSelectedFile(null);
        setTechnology("");
      } else {
        toast.dismiss(toastId);
        toast.error(data.error);
      }
    } catch (error) {
      toast.dismiss(toastId);
      console.error("Error submitting form:", error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <>
      {/* Job Application Form Section */}
      <section className="px-5 lg:px-32 py-10 sm:py-14 lg:py-16 text-center">
        <div className="lg:px-20">
          {/* Header */}
          <HeadingMenu heading={"job application"} />
          {/* Description */}
          <Tagline
            tagline={
              "Join our team and be part of an innovative and dynamic work environment. We are looking for talented and driven individuals to help us achieve our goals. Fill out the application form below to take the first step towards an exciting career with us."
            }
          />
        </div>

        {/* Form Inputs */}
        <div className="my-10">
          <form onSubmit={handleSubmit}>
            {/* Input for Full Name */}
            <div
              className="flex flex-col gap-1 justify-start items-start"
              data-aos="fade-up"
            >
              <label
                htmlFor=""
                className="text-center text-white text-[18px] sm:text-[20px] lg:[22px] xl:text-[28px] ms-4 font-normal font-varino capitalize leading-normal"
                style={{
                  background: "linear-gradient(to bottom, white, gray)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Full Name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
                className={`rounded-3xl border text-white border-white justify-start items-center p-[.8rem] w-full  bg-transparent focus:outline-white  focus:border-white ${
                  formErrors.fullName ? "border-red-500" : ""
                }`}
                placeholder="Full Name"
              />
              {formErrors.fullName && (
                <p className="text-red-500">{formErrors.fullName}</p>
              )}
            </div>

            {/* Inputs for Email and Phone */}
            <div className="grid lg:grid-cols-2 my-7 gap-5" data-aos="fade-up">
              <div className="flex flex-col gap-1 justify-start items-start">
                <label
                  htmlFor=""
                  className="text-center text-white text-[18px] sm:text-[20px] lg:[22px] xl:text-[28px] ms-4 font-normal font-varino capitalize leading-normal"
                  style={{
                    background: "linear-gradient(to bottom, white, gray)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className={`rounded-3xl border text-white border-white justify-start items-center p-[.8rem] w-full  bg-transparent focus:outline-white  focus:border-white ${
                    formErrors.email ? "border-red-500" : ""
                  }`}
                  placeholder="Email Address"
                />
                {formErrors.email && (
                  <p className="text-red-500">{formErrors.email}</p>
                )}
              </div>
              <div className="flex flex-col gap-1 justify-start items-start">
                <label
                  htmlFor=""
                  className="text-center text-white text-[18px] sm:text-[20px] lg:[22px] xl:text-[28px] ms-4 font-normal font-varino capitalize leading-normal"
                  style={{
                    background: "linear-gradient(to bottom, white, gray)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Phone Number
                </label>
                <input
                  type="phone"
                  value={phNumber}
                  onChange={(e) => {
                    setPhNumber(e.target.value);
                  }}
                  className={`rounded-3xl border text-white border-white justify-start items-center p-[.8rem] w-full  bg-transparent focus:outline-white  focus:border-white ${
                    formErrors.phNumber ? "border-red-500" : ""
                  }`}
                  placeholder="Phone Number"
                />
                {formErrors.phNumber && (
                  <p className="text-red-500">{formErrors.phNumber}</p>
                )}
              </div>
            </div>

            <div className="grid lg:grid-cols-2 my-7 gap-5" data-aos="fade-up">
              <div className="flex flex-col gap-1 justify-start items-start">
                <label
                  htmlFor=""
                  className="text-center  text-white text-[18px] sm:text-[20px] lg:[22px] xl:text-[28px] ms-4 font-normal font-varino capitalize leading-normal"
                  style={{
                    background: "linear-gradient(to bottom, white, gray)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Qualication
                </label>
                <input
                  type="text"
                  value={qualification}
                  onChange={(e) => {
                    setQualification(e.target.value);
                  }}
                  className={`rounded-3xl text-white border border-white justify-start items-center p-[.8rem] w-full  bg-transparent focus:outline-white  focus:border-white ${
                    formErrors.qualification ? "border-red-500" : ""
                  }`}
                  placeholder="Qualification"
                />
                {formErrors.qualification && (
                  <p className="text-red-500">{formErrors.qualification}</p>
                )}
              </div>
              <div className="flex flex-col gap-1 justify-start items-start">
                <label
                  htmlFor=""
                  className="text-center text-white text-[18px] sm:text-[20px] lg:[22px] xl:text-[28px] ms-4 font-normal font-varino capitalize leading-normal"
                  style={{
                    background: "linear-gradient(to bottom, white, gray)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Department
                </label>
                <select
                  value={dept}
                  onChange={(e) => {
                    setDept(e.target.value);
                  }}
                  className={`rounded-3xl border text-white border-white justify-start items-center p-[.8rem] w-full bg-transparent focus:outline-white  focus:border-white ${
                    formErrors.dept ? "border-red-500" : ""
                  }`}
                >
                  {List.map((option, index) => (
                    <option
                      key={index}
                      value={option}
                      className="bg-[#111424] text-white rounded"
                    >
                      {option}
                    </option>
                  ))}
                </select>
                {formErrors.dept && (
                  <p className="text-red-500">{formErrors.dept}</p>
                )}
              </div>
            </div>
            <div className="my-7" data-aos="fade-up">
              <div className="flex flex-col gap-1 justify-start items-start">
                <label
                  htmlFor=""
                  className="text-center text-white text-[18px] sm:text-[20px] lg:[22px] xl:text-[28px] ms-4 font-normal font-varino capitalize leading-normal"
                  style={{
                    background: "linear-gradient(to bottom, white, gray)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Portfolio/Website
                </label>
                <input
                  value={portfolioSite}
                  onChange={(e) => {
                    setPortfolioSite(e.target.value);
                  }}
                  className={`rounded-3xl border text-white border-white justify-start items-center p-[.8rem] w-full bg-transparent focus:outline-white  focus:border-white ${
                    formErrors.portfolioSite ? "border-red-500" : ""
                  }`}
                />
                {formErrors.portfolioSite && (
                  <p className="text-red-500">{formErrors.portfolioSite}</p>
                )}
              </div>
            </div>

            <div
              className="flex flex-col h-auto sm:flex-row gap-3"
              data-aos="fade-up"
            >
              <div className="flex flex-col w-full sm:w-[49%] items-start justify-start">
                <label
                  htmlFor=""
                  className="text-center text-white text-[18px] sm:text-[20px] lg:[22px] xl:text-[28px] ms-4 font-normal font-varino capitalize leading-normal my-2"
                  style={{
                    background: "linear-gradient(to bottom, white, gray)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Resume
                </label>
                <div
                  onDragOver={handleDragOverResume}
                  onDrop={handleDropResume}
                  onClick={() => document.getElementById("fileInput").click()}
                  style={{
                    border: "2px dashed #aaa",
                    borderRadius: "8px",
                    padding: "20px",
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                  className="flex justify-center h-[150px] sm:h-[150px] xl:h-[180px]  items-center w-full hover:opacity-50 transition-opacity duration-300"
                >
                  <input
                    type="file"
                    id="fileInput"
                    onChange={handleResumeSelect}
                    style={{ display: "none" }}
                  />
                  <div className="flex flex-col justify-center items-center gap-5">
                    <p className="text-white">
                      Drag and drop a file here, or click to select a file.
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <path
                        d="M11.25 27.5H18.75C25 27.5 27.5 25 27.5 18.75V11.25C27.5 5 25 2.5 18.75 2.5H11.25C5 2.5 2.5 5 2.5 11.25V18.75C2.5 25 5 27.5 11.25 27.5Z"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11.25 14.3872L15 18.1372L18.75 14.3872"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15 18.1372V8.13721"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.5 20.6372C12.3625 22.2622 17.6375 22.2622 22.5 20.6372"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {selectedResume && (
                  <div
                    className="relative flex flex-col items-center gap-2"
                    style={{ marginTop: "20px" }}
                  >
                    <div
                      className="absolute top-0 right-0 bg-white rounded-full cursor-pointer"
                      onClick={handleRemoveResume}
                    >
                      <XCircleIcon className="text-red-500 hover:text-black h-5 w-5" />
                    </div>
                    {selectedFile.type === allowedFileTypes[0] ||
                      (selectedFile.type === allowedFileTypes[1] && (
                        <Image
                          src="/images/misc/doc.svg"
                          alt={selectedResume.name}
                          className="h-12 w-12 object-contain"
                          width={0}
                          height={0}
                        />
                      ))}
                    {selectedResume.type === allowedFileTypes[2] && (
                      <Image
                        src="/images/misc/pdf.svg"
                        alt={selectedFile.name}
                        className="h-12 w-12 object-contain"
                        width={0}
                        height={0}
                      />
                    )}
                    <p className="text-white">
                      Selected File: {selectedResume.name}
                    </p>
                    <p className="text-white">
                      File Size: {selectedResume.size} bytes
                    </p>
                    {/* Add a link or button to open the selected file */}
                    <a
                      className="text-white cursor-pointer font-bold"
                      href={URL.createObjectURL(selectedResume)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open File
                    </a>
                  </div>
                )}
              </div>

              <div className="flex flex-col w-full sm:w-[49%] items-start justify-start">
                <label
                  htmlFor=""
                  className="text-center text-white text-[18px] sm:text-[20px] lg:[22px] xl:text-[28px] ms-4 font-normal font-varino capitalize leading-normal my-2"
                  style={{
                    background: "linear-gradient(to bottom, white, gray)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Cover Letter
                </label>
                <div
                  onDragOver={handleDragOverCover}
                  onDrop={handleDropCover}
                  onClick={() => document.getElementById("fileInput").click()}
                  style={{
                    border: "2px dashed #aaa",
                    borderRadius: "8px",
                    padding: "20px",
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                  className="flex justify-center h-[150px] sm:h-[150px] xl:h-[180px] items-center w-full hover:opacity-50 transition-opacity duration-300"
                >
                  <input
                    type="file"
                    id="fileInput"
                    onChange={handleCoverSelect}
                    style={{ display: "none" }}
                  />
                  <div className="flex flex-col justify-center items-center gap-5">
                    <p className="text-white">
                      Drag and drop a file here, or click to select a file.
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <path
                        d="M11.25 27.5H18.75C25 27.5 27.5 25 27.5 18.75V11.25C27.5 5 25 2.5 18.75 2.5H11.25C5 2.5 2.5 5 2.5 11.25V18.75C2.5 25 5 27.5 11.25 27.5Z"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11.25 14.3872L15 18.1372L18.75 14.3872"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15 18.1372V8.13721"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.5 20.6372C12.3625 22.2622 17.6375 22.2622 22.5 20.6372"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {coverLetter && (
                  <div
                    className="relative flex flex-col items-center gap-2"
                    style={{ marginTop: "20px" }}
                  >
                    <div
                      className="absolute top-0 right-0 bg-white rounded-full cursor-pointer"
                      onClick={handleRemoveCover}
                    >
                      <XCircleIcon className="text-red-500 hover:text-black h-5 w-5" />
                    </div>
                    {coverLetter.type === allowedFileTypes[0] ||
                      (coverLetter.type === allowedFileTypes[1] && (
                        <Image
                          src="/images/misc/doc.svg"
                          alt={selectedCover.name}
                          className="h-12 w-12 object-contain"
                          width={0}
                          height={0}
                        />
                      ))}
                    {coverLetter.type === allowedFileTypes[2] && (
                      <Image
                        src="/images/misc/pdf.svg"
                        alt={selectedFile.name}
                        className="h-12 w-12 object-contain"
                        width={0}
                        height={0}
                      />
                    )}
                    <p className="text-white">
                      Selected File: {coverLetter.name}
                    </p>
                    <p className="text-white">
                      File Size: {coverLetter.size} bytes
                    </p>
                    {/* Add a link or button to open the selected file */}
                    <a
                      className="text-white cursor-pointer font-bold"
                      href={URL.createObjectURL(coverLetter)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open File
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div
              className="flex justify-center items-center"
              data-aos="fade-up"
            >
              <div className="max-w-full text-end">
                <button
                  disabled={isUploading}
                  type="submit"
                  className="text-white bg-[#00A7E1] px-[2.5rem] py-[1rem] rounded-full my-5 sm:mt-10 lg:mt-14"
                >
                  Submit Application
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default ApplicationForm;
