import React from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Link from 'next/link';

const EllipsisMenu = ({ options, children }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
          {children}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          style={{
            background: "linear-gradient(to bottom, #111424, #10132300)",
          }}
          className="z-40 absolute right-0 mt-2 w-56 origin-top-right rounded-lg shadow-lg ring-1 ring-black/5 focus:outline-none border border-white"
        >
          <div className="px-1 py-1 z-40">
            {options.map((option) => (
              <Menu.Item key={option.label}>
                {({ active }) => (
                  <div className="flex w-full items-center rounded-md px-2 py-2 text-sm">
                    {option.type === 'link' ? (
                      <Link href={option.href} className={`${active ? 'bg-[#151B3A] text-white' : 'text-gray-100'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                        {option.label}
                      </Link>
                    ) : option.type === 'button' ? (
                      <button onClick={option.onClick} className={`${active ? 'bg-[#151B3A] text-white' : 'text-gray-100'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                        {option.label}
                      </button>
                    ) : (
                      <span className={`${active ? 'bg-[#151B3A] text-white' : 'text-gray-100'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                        {option.label}
                      </span>
                    )}
                  </div>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default EllipsisMenu;
