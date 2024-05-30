"use client";
import Image from "next/image";
import React from "react";
import logo from "../../public/images/deep-ai.png";

import { Menu, Transition } from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
import {
  ArrowRightOnRectangleIcon,
  Cog8ToothIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { signOut, useSession } from "next-auth/react";

const DahboardNav = () => {
  const { data: session } = useSession();
  return (
    <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
      <div className="text-2xl font-bold ">
        <Image src={logo} alt="Alright logo" width={100} height={100} />
      </div>
      <div>
        {/* Avatar */}
        <div className="flex justify-center items-center gap-4 ">
          <Menu as="div" className="relative z-40">
            <Menu.Button>
              {session?.user?.image ? (
                <div className="relative h-12 w-12">
                  <Image
                    src={session?.user.image}
                    alt={session?.user.name}
                    className="inline-block rounded-full object-cover"
                    fill
                  />
                </div>
              ) : (
                <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-stone-100">
                  <svg
                    className="h-full w-full text-stone-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
              )}
            </Menu.Button>
            <Transition
              enter="transition duration-150 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-150 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items className="bg-white dark:text-react absolute right-0 mt-1 flex w-96 origin-top-right flex-col rounded-xl py-6 text-white shadow-lg focus:outline-none dark:bg-white">
                <div className="mb-4 flex gap-4 px-6 text-sm">
                  {session?.user?.image ? (
                    <div className="relative h-10 w-10">
                      <Image
                        src={session?.user.image}
                        alt={session?.user.name}
                        className="inline-block rounded-full"
                        fill
                      />
                    </div>
                  ) : (
                    <span className="inline-block h-8 w-8 overflow-hidden rounded-full bg-stone-100">
                      <svg
                        className="h-full w-full text-stone-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </span>
                  )}
                  <div>
                    <p className="font-medium text-stone-600">
                      {session?.user.name || "User name"}
                    </p>
                    <p className="text-stone-400">{session?.user.email}</p>
                  </div>
                </div>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/dashboard/profile"
                      className={clsx(
                        active && "bg-stone-700/50",
                        "inline-flex items-center gap-6 px-[34px] py-2 text-sm text-gray-700 "
                      )}
                    >
                      <UserIcon className="h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/dashboard/settings"
                      className={clsx(
                        active && "bg-stone-700/50",
                        "inline-flex items-center gap-6 px-[34px] py-2 text-sm text-gray-700 "
                      )}
                    >
                      <Cog8ToothIcon className="h-5 w-5 text-gray-700" />
                      <span>Settings</span>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={clsx(
                        active && "bg-stone-700/50 dark:bg-stone-200",
                        "inline-flex items-center gap-6 px-[34px] py-2 text-sm text-gray-700 "
                      )}
                      onClick={() => signOut()}
                    >
                      <ArrowRightOnRectangleIcon className="h-5 w-5 text-gray-700" />
                      <span>Sign Out</span>
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
          <p className="text-white text-sm">{session?.user.name}</p>
        </div>
      </div>
    </div>
  );
};

export default DahboardNav;
