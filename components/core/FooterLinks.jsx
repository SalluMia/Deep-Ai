"use client";
import React from "react";
import Link from "next/link";
import { SelectedIcon } from "@/icons";
import { usePathname } from "next/navigation";

const FooterLinks = () => {
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
    },{
        name: "Portfolio",
        path: "/portfolio",
      },{
        name: "Our Product",
        path: "/ourproducts",
      },{
        name: "Blogs",
        path: "/blogs",
      },{
        name: "Contact",
        path: "/contact",
      },
  ];
  return (
    <>
      {links.map(({ name, path }) => (
        <Link className="relative hidden lg:block" key={name} href={path}>
          <div className="group">
            <p className="text-white lg:text-[14px] xl:text-[16px] font-monosans group-hover:text-gray-300 transition-colors duration-300">
              {name}
            </p>
            <div
              className={`absolute -bottom-1  transition-opacity duration-300 ${
                activePath !== path ? "opacity-0 group-hover:opacity-100" : ""
              }`}
            >
              <SelectedIcon />
            </div>
          </div>
        </Link>
      ))}
    
    </>
  );
};

export default FooterLinks;
