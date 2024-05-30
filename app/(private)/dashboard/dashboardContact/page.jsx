"use client";

import axios from "axios";
import { useEffect, useState } from "react";

import { MdDelete } from "react-icons/md";

const DashboardContact = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/quote");
        console.log(response.data.allQuotes);
        setQuotes(response.data.allQuotes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <section className=" flex justify-center items-center">
        <div className="relative overflow-x-auto overflow-y-scroll h-[90%] w-[70rem]">
          <table className="w-full h-[70%]  text-sm text-left rtl:text-right text-white  table-auto">
            <thead className="text-xs text-white uppercase bg-[#151B3A] rounded-xl ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Country
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Estimated Cost
                </th>
                <th scope="col" className="px-6 py-3">
                  Project Type
                </th>
                <th scope="col" className="px-6 py-3">
                  Technology
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {quotes?.map((item) => (
                <tr key={item?._id} className="bg-[#151B3A] border-b ">
                  <td className="p-3 sm:p-4 font-medium whitespace-nowrap text-white">
                    {item?.fullname}
                  </td>
                  <td className="p-3 sm:p-4">{item?.country}</td>
                  <td className="p-3 sm:p-4">{item?.email}</td>
                  <td className="p-3 sm:p-4">{item?.description}</td>
                  <td className="p-3 sm:p-4">{item?.estimatedCost}</td>
                  <td className="p-3 sm:p-4">{item?.projectType}</td>
                  <td className="p-3 sm:p-4">{item?.technology}</td>
                  <td className="p-3 sm:p-4">{item?.phone}</td>
                  <td className="p-3 sm:p-4">
                    <button className="text-red-500">
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default DashboardContact;
