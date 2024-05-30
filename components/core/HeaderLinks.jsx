"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { usePathname } from "next/navigation";
import DropDownMenu from "../dropdownmenu/DropDownMenu";
import { SelectedIcon } from "@/icons";
const Links = ({ SettingMenu, ref, more, closeDropdown }) => {
  const activePath = usePathname();
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <>
      {links.map(({ name, path }) => {
        return name.toLowerCase() === "services" ? (
          <div
            className="hidden lg:block relative text-center"
            onClick={SettingMenu}
            ref={ref}
            key={name}
          >
            <div className="cursor-pointer">
              <h1
                className="text-white font-monosans group-hover:text-gray-300 transition-colors
                duration-300 flex items-center gap-1"
              >
                <span>{name}</span>
                {more ? (
                  <FaChevronUp className="text-sm" />
                ) : (
                  <FaChevronDown className="text-sm" />
                )}
              </h1>
            </div>
          </div>
        ) : (
          <Link className="relative" key={name} href={path}>
            <div className="group">
              <p className="text-white font-monosans group-hover:text-gray-300 transition-colors duration-300">
                {name}
              </p>
              <div
                className={`absolute -bottom-1 transition-opacity duration-300 ${
                  activePath !== path ? "opacity-0 group-hover:opacity-100" : ""
                }`}
              >
                <SelectedIcon />
              </div>
            </div>
          </Link>
        );
      })}
      <DropDownMenu closeDropdown={closeDropdown} />
    </>
  );
};

export default Links;
