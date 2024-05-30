'use client'
import React, { useState } from 'react'
// import Link from 'next/link';
// import { EyeSlashIcon, EyeIcon, } from "@heroicons/react/24/solid";
// import LockIcon from '@/icons/lock-icon';
// import AtSignIcon from '@/icons/atsign-icon';
import { signIn } from 'next-auth/react';
import toast from "react-hot-toast";
import purpleGradient from "../../public/svgs/purpleGradient.svg";
import Image from 'next/image';
import Link from 'next/link';

const LoginForm = () => {
    // const [showPassword, setShowPassword] = useState(false);
    const [authForm, setAuthForm] = useState({
        email: "",
        passcode: ""
    });
    const [authLoad, setAuthLoad] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (field, value) => {
        setAuthForm({ ...authForm, [field]: value });
    };


    // const showPasswordHandler = () => {
    //     if (showPassword === false) {
    //         setShowPassword(true);
    //     } else {
    //         setShowPassword(false)
    //     }
    // }
    const { email, passcode } = authForm;

    const validateForm = () => {
        const errors = {};

        if (!email.trim()) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Invalid email address";
        }

        if (!passcode.trim()) {
            errors.passcode = "Password is Required.";
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0; // Return true if no errors
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setAuthLoad(true);
        const data = await signIn('credentials', {
            redirect: true,
            email: authForm.email,
            password: authForm.passcode,
        });

        toast.success("Login Success!!");
    };

    return (
        <>
            <form onSubmit={(e) => handleLogin(e)} className="font-monosans relative flex flex-col gap-20 py-12 px-5 rounded-3xl border-4 border-pink-400 ">
                {/* <---- Gradient -----> */}
                <div className="absolute top-0">
                    <Image
                        className="xl:w-full -z-10 animate-pulse"
                        alt="gradient1"
                        src={purpleGradient}
                    />
                </div>
                {/* <---- Input fields  -----> */}
                <div className="flex flex-col gap-5 z-10">

                    {/* Input field for Email  */}
                    <div className="flex flex-col gap-1 justify-start items-start">
                        <label
                            htmlFor=""
                            className="text-center text-white text-lg font-normal font-varino capitalize leading-normal"
                            style={{
                                background: "linear-gradient(to bottom, white, gray)",
                                WebkitBackgroundClip: "text",
                                color: "transparent",
                            }}
                        >
                            Email
                        </label>
                        <input
                            value={authForm.email}
                            onChange={(e) => { handleChange("email", e.target.value) }}
                            type="email"
                            className={`rounded-3xl borderjustify-start items-center p-[.7rem] w-full  bg-transparent ${formErrors.email ? "border-red-500 focus:border-red-500" : "border-white focus:border-white"} focus:outline-none text-white`}
                            placeholder="Email"
                        />
                        {formErrors.email && (
                            <p className="text-red-500 text-sm">{formErrors.email}</p>
                        )}
                    </div>
                    {/* Input field for Paassword  */}
                    <div className="flex flex-col gap-1 justify-start items-start">
                        <label
                            htmlFor=""
                            className="text-center text-white text-lg font-normal font-varino capitalize leading-normal"
                            style={{
                                background: "linear-gradient(to bottom, white, gray)",
                                WebkitBackgroundClip: "text",
                                color: "transparent",
                            }}
                        >
                            Password
                        </label>
                        <input
                            value={authForm.passcode}
                            onChange={(e) => { handleChange("passcode", e.target.value) }}
                            type="password"
                            className={`rounded-3xl borderjustify-start items-center p-[.7rem] w-full  bg-transparent ${formErrors.passcode ? "border-red-500 focus:border-red-500" : "border-white focus:border-white"} focus:outline-none text-white`}
                            placeholder="Password"
                        />
                        {formErrors.passcode && (
                            <p className="text-red-500 text-sm">{formErrors.passcode}</p>
                        )}
                    </div>

                    <div className='flex justify-between items-center'>
                        <div class="flex items-center">
                            <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-400 bg-none border-gray-300 rounded focus:ring-gray-500 dark:focus:ring-gray-600 focus:ring-2" />
                            <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-400 dark:text-gray-300">Remember Me.</label>
                        </div>
                        <Link href='/reset-password' className='text-sm text-[#00BDFF] hover:underline'>Reset Password!</Link>
                    </div>
                </div>
                <button
                    disabled={authLoad} type="submit"
                    className="text-center text-white text-lg font-medium font-monosans capitalize px-6 py-3 bg-sky-500 hover:bg-sky-700 transition-colors duration-300 rounded-[90px] justify-center items-center gap-2.5 inline-flex cursor-pointer z-10 "
                >
                    {authLoad
                        ? <p className='text-gray-300'>Loading...</p>
                        : <p className='text-white'>Login</p>
                    }
                </button>
            </form>
        </>
    )
}

export default LoginForm
