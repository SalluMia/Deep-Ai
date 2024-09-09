"use client";
import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Gradient1 from "../../.../../../../public/svgs/gradient1.svg";
import Gradient2 from "../../.../../../../public/svgs/gradient2.svg";
import rightGradient from "../../.../../../../public/svgs/right.svg";
import toast from "react-hot-toast";
import { XCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

// Functional component for the job application form
const GetQoutes = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const projects = [
    { name: "Select Your Project Type" },
    { name: "Mobile App" },
    { name: "Website" },
    { name: "Both" },
  ];

  const technologies = [
    { name: "Select Your Technology" },
    { name: "Flutter" },
    { name: "Laravel" },
    { name: "Python" },
  ];

  const [selectedFile, setSelectedFile] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [projectType, setProjectType] = useState("");
  const [technology, setTechnology] = useState("");
  const [cost, setCost] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isUploading, setIsUploading] = useState(false);

  const allowedFileTypes = [
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/pdf",
  ];

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file && allowedFileTypes.includes(file.type)) {
      setSelectedFile(file);
    } else {
      toast.error(
        "Invalid file type for Document. Please upload a DOC, DOCX, or PDF file.",
        {
          duration: 4000,
        }
      );
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
  };

  ///////////  Validation Function ////////////
  const validateForm = () => {
    const errors = {};

    // Validate other fields as needed
    if (!fullName.trim()) {
      errors.fullName = "Full Name is required";
    }

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email address";
    }

    if (!phoneNumber.trim()) {
      errors.phoneNumber = "Phone Number is required";
    }

    if (!country.trim()) {
      errors.country = "Country is required";
    }

    if (projectType === projects[0].name) {
      errors.projectType = "Please select a Project Type";
    }

    if (technology === technologies[0].name) {
      errors.technology = "Please select a Technology";
    }

    if (!cost.trim()) {
      errors.cost = "Estimated Cost is required";
    } else if (isNaN(Number(cost))) {
      errors.cost = "Estimated Cost must be a number";
    }

    if (!projectDescription.trim()) {
      errors.projectDescription = "Project Description is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  //////////   Form Submitting ///////////////////////
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsUploading(true);
    const formData = new FormData();
    formData.append("fullname", fullName);
    formData.append("email", email);
    formData.append("phone", phoneNumber);
    formData.append("country", country);
    formData.append("projectType", projectType);
    formData.append("technology", technology);
    formData.append("estimatedCost", cost);
    formData.append("description", projectDescription);
    formData.append("file", selectedFile);

    const toastId = toast.loading("Uploading please wait !!");

    try {
      const res = await fetch("/api/quote", {
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
      {/* Background gradients */}
      <div className="absolute right-0 top-0 -z-10">
        <Image className="xl:w-full" alt="gradient2" src={Gradient2} />
      </div>
      <div className="absolute left-0 -z-10">
        <Image className="xl:w-full" alt="gradient1" src={Gradient1} />
      </div>
      <div className="absolute right-0 top-96">
        <Image className="xl:w-full" alt="gradient1" src={rightGradient} />
      </div>

      {/* Job Application Form Section */}
      <section className="px-5 lg:px-32 py-16 text-center">
        <div className="lg:px-20">
          {/* Header */}
          <h1
            data-aos="fade-up"
            className="font-varino text-[2rem] xl:text-[4rem] text-center"
            style={{
              background: "linear-gradient(to bottom, white, gray)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Book a Free Consultation
          </h1>

          {/* Description */}
          <p
            data-aos="fade-up"
            className="text-white text-[1.25rem] font-monosans font-[300] text-center"
          >
            Tell us about your unique requirements, desired features, and any
            specific design elements you have in mind using the form below. We
            will tailor a quote that suits your needs and sets you on the path
            to online success. Let us transform your ideas into a digital
            masterpiece together!
          </p>
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
                className="text-center text-white text-xl ms-4 font-normal font-varino capitalize leading-normal"
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
                  className="text-center text-white text-xl ms-4 font-normal font-varino capitalize leading-normal"
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
                  className="text-center text-white text-xl ms-4 font-normal font-varino capitalize leading-normal"
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
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  className={`rounded-3xl border text-white border-white justify-start items-center p-[.8rem] w-full  bg-transparent focus:outline-white  focus:border-white ${
                    formErrors.phoneNumber ? "border-red-500" : ""
                  }`}
                  placeholder="Phone Number"
                />
                {formErrors.phoneNumber && (
                  <p className="text-red-500">{formErrors.phoneNumber}</p>
                )}
              </div>
            </div>

            {/* Inputs for Country  and Project type */}
            <div className="grid lg:grid-cols-2 my-7 gap-5" data-aos="fade-up">
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
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                  className={`rounded-3xl text-white border border-white justify-start items-center p-[.8rem] w-full  bg-transparent focus:outline-white  focus:border-white ${
                    formErrors.country ? "border-red-500" : ""
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
                  Project Type
                </label>
                <select
                  value={projectType}
                  onChange={(e) => {
                    setProjectType(e.target.value);
                  }}
                  className={`rounded-3xl border text-white border-white justify-start items-center p-[.8rem] w-full bg-transparent focus:outline-white  focus:border-white ${
                    formErrors.projectType ? "border-red-500" : ""
                  }`}
                >
                  {projects.map((option, index) => (
                    <option
                      key={index}
                      value={option.name}
                      className="bg-[#111424] text-white rounded"
                    >
                      {option.name}
                    </option>
                  ))}
                </select>
                {formErrors.projectType && (
                  <p className="text-red-500">{formErrors.projectType}</p>
                )}
              </div>
            </div>
            {/* Inputs for Technology  and Cost */}
            <div className="grid lg:grid-cols-2 my-7 gap-5" data-aos="fade-up">
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
                  Technology
                </label>
                <select
                  value={technology}
                  onChange={(e) => {
                    setTechnology(e.target.value);
                  }}
                  className={`rounded-3xl border text-white border-white justify-start items-center p-[.8rem] w-full bg-transparent focus:outline-white  focus:border-white ${
                    formErrors.technology ? "border-red-500" : ""
                  }`}
                >
                  {technologies.map((option, index) => (
                    <option
                      key={index}
                      value={option.name}
                      className="bg-[#111424] text-white rounded"
                    >
                      {option.name}
                    </option>
                  ))}
                </select>
                {formErrors.technology && (
                  <p className="text-red-500">{formErrors.technology}</p>
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
                  Estimated Cost (in $dollars)
                </label>
                <input
                  type="text"
                  value={cost}
                  onChange={(e) => {
                    setCost(e.target.value);
                  }}
                  className={`rounded-3xl text-white border border-white justify-start items-center p-[.8rem] w-full  bg-transparent focus:outline-white  focus:border-white ${
                    formErrors.cost ? "border-red-500" : ""
                  }`}
                  placeholder="Cost"
                />
                {formErrors.cost && (
                  <p className="text-red-500">{formErrors.cost}</p>
                )}
              </div>
            </div>

            {/* Input for Project Description */}
            <div
              className="flex flex-col gap-1 justify-start items-start my-10"
              data-aos="fade-up"
            >
              <label
                htmlFor=""
                className="text-center text-white text-xl ms-4 font-normal font-varino capitalize leading-normal"
                style={{
                  background: "linear-gradient(to bottom, white, gray)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Project Description
              </label>
              <textarea
                rows={7}
                value={projectDescription}
                onChange={(e) => {
                  setProjectDescription(e.target.value);
                }}
                type="text"
                className={`rounded-3xl border text-white border-white justify-start items-center p-[.8rem] w-full  bg-transparent focus:outline-white  focus:border-white ${
                  formErrors.projectDescription ? "border-red-500" : ""
                }`}
                placeholder="Project Description"
              />
              {formErrors.projectDescription && (
                <p className="text-red-500">{formErrors.projectDescription}</p>
              )}
            </div>

            {/* The FIle code is written below copy from there  */}
            <div
              className="flex flex-col  items-start justify-start"
              data-aos="fade-up"
            >
              <label
                htmlFor=""
                className="text-center text-white text-xl ms-4 font-normal font-varino capitalize leading-normal my-2"
                style={{
                  background: "linear-gradient(to bottom, white, gray)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Document
              </label>
              <div
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={() => document.getElementById("fileInput").click()}
                style={{
                  border: "2px dashed #aaa",
                  borderRadius: "8px",
                  padding: "20px",
                  textAlign: "center",
                  cursor: "pointer",
                }}
                className="flex justify-center items-center w-full hover:opacity-50 transition-opacity duration-300"
              >
                <input
                  type="file"
                  id="fileInput"
                  onChange={handleFileSelect}
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

              {selectedFile && (
                <div
                  className="relative flex flex-col items-center gap-2"
                  style={{ marginTop: "20px" }}
                >
                  <div
                    className="absolute top-0 right-0 bg-white rounded-full cursor-pointer"
                    onClick={handleRemoveFile}
                  >
                    <XCircleIcon className="text-red-500 hover:text-black h-5 w-5" />
                  </div>
                  {selectedFile.type === allowedFileTypes[0] ||
                    (selectedFile.type === allowedFileTypes[1] && (
                      <Image
                        src="/images/misc/doc.svg"
                        alt={selectedFile.name}
                        className="h-12 w-12 object-contain"
                        width={0}
                        height={0}
                      />
                    ))}
                  {selectedFile.type === allowedFileTypes[2] && (
                    <Image
                      src="/images/misc/pdf.svg"
                      alt={selectedFile.name}
                      className="h-12 w-12 object-contain"
                      width={0}
                      height={0}
                    />
                  )}
                  <p className="text-white">
                    Selected File: {selectedFile.name}
                  </p>
                  <p className="text-white">
                    File Size: {selectedFile.size} bytes
                  </p>
                  {/* Add a link or button to open the selected file */}
                  <a
                    className="text-white cursor-pointer font-bold"
                    href={URL.createObjectURL(selectedFile)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open File
                  </a>
                </div>
              )}
            </div>

            <div
              className="flex justify-center items-center"
              data-aos="fade-up"
            >
              <div className="max-w-full text-end">
                <button
                  disabled={isUploading}
                  type="submit"
                  className="text-white bg-[#00A7E1] px-[2.5rem] py-[1rem] rounded-full my-5 lg:my-10"
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
};

export default GetQoutes;
