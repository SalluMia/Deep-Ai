"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import quotes from "../../public/images/quotes.png";
import jobIcon from "../../public/images/sidebarIcons/job.png"
import dashboardIcon from "../../public/images/sidebarIcons/dashboard.png"
import LogoutIcon from "../../public/images/sidebarIcons/logout.png"
import SettingIcon from "../../public/images/sidebarIcons/settingicons.png"
import OnlineEducation from  "../../public/images/sidebarIcons/onlineeducationicon.png"
import ProductIcon from  "../../public/images/sidebarIcons/producticon.png"
import BloggingIcon from  "../../public/images/sidebarIcons/blogging.png"
import EventManagement from  "../../public/images/sidebarIcons/eventmanagementicon.png"
import { signOut } from "next-auth/react";
import { IoIosContacts } from "react-icons/io";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const activePath = usePathname();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const Links = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: dashboardIcon
    },
    {
      name: "Quotes",
      path: "/dashboard/quotes",
      icon: quotes
    },
    {
      name: "Job Vacancies",
      path: "/dashboard/jobs-vacancies",
      icon: jobIcon
    },
    {
      name: "Job Vacancies",
      path: "/dashboard/jobs-vacancies",
      icon: OnlineEducation
    },
    {
      name: "Job Vacancies",
      path: "/dashboard/jobs-vacancies",
      icon: ProductIcon
    },
    {
      name: "Job Vacancies",
      path: "/dashboard/jobs-vacancies",
      icon: BloggingIcon
    },
    {
      name: "Job Vacancies",
      path: "/dashboard/jobs-vacancies",
      icon: EventManagement
    }
  ]

  return (
    <>
      {/* Sidebar Button for Small Screens */}
      <div className="">
        <button
          className="lg:hidden fixed z-10 top-4 right-0 bg-white p-2 mx-2 rounded-lg"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 fixed lg:relative text-white bg-[#111424] w-[1/12] p-4 h-full transition-transform ease-in-out duration-300 transform lg:h-full z-30 flex justify-center items-center`}
      >

        {/* Sidebar content goes here */}
        <div className="flex flex-col justify-between space-y-14 items-center rounded-[14rem] bg-[#151B3A] py-6">
          <ul>
            {
              Links.map(({ name, path, icon }, index) => (
                <li key={index} className="py-2 text-lg font-bold">
                  <Link
                    className="relative flex items-center gap-2 px-4   "
                    href={path}
                  >
                    <div className="group">
                      <div
                        className={`absolute left-1 top-2 transition-opacity duration-300 ${activePath !== path ? "opacity-0 group-hover:opacity-100" : ""}`}>
                        <div className="rounded-full bg-white h-2 w-2" />
                      </div>
                      <Image width={30} height={30} alt={name} src={icon} />
                    </div>
                  </Link>
                </li>
              ))
            }


            {/* <li className="py-2 text-lg font-bold">
              <Link
                className="flex items-center gap-2 px-4  "
                href="/dashboard/dashboardContact"
              >
                <IoIosContacts className=" h-12 w-12" />
              </Link>
            </li> */}

          </ul>

         <div className="flex flex-col gap-2 items-center">
          <Link href={"/dashboard/settings"}>
          <Image width={32} height={32} alt="Logout" src={SettingIcon} />
          </Link>
          <div onClick={signOut} className="cursor-pointer">
            <Image width={40} height={40} alt="Logout" src={LogoutIcon} />
          </div>
         </div>
        </div>

      </aside>
    </>
  );
};

export default Sidebar;
