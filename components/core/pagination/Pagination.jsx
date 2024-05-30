import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className='cursor-pointer flex justify-center items-center w-full' aria-label="Page navigation example">
            <ul className="flex items-center gap-3 -space-x-px h-12 text-sm ">
                <li>
                    <a onClick={()=> currentPage !== 1?  paginate(currentPage-1) : null} className="flex items-center rounded-full justify-center px-3 h-12 w-12 leading-tight text-gray-500 hover:bg-gray-100 hover:opacity-50 border border-e-0 border-gray-300 hover:text-gray-700 ">
                        <span className="sr-only">Previous</span>
                        <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                        </svg>
                    </a>
                </li>
                {pageNumbers.map(number => (
                    <li key={number} >
                        <a onClick={() => paginate(number)} 
                        className={`flex items-center justify-center rounded-full  px-3 h-12 w-12 leading-tight ${currentPage === number ? "text-white bg-blue-700 hover:bg-blue-900 hover:text-white" : "text-gray-500  hover:bg-gray-100 hover:opacity-50 hover:text-gray-700" } border border-gray-300 transition-colors duration-300 `}>{number}</a>
                    </li>
                ))}
                <li>
                    <a onClick={()=> pageNumbers.length > 1 && currentPage < pageNumbers.length ? paginate(currentPage+1): null} className="flex rounded-full  items-center justify-center px-3 h-12 w-12 leading-tight text-gray-500 hover:bg-gray-100 hover:opacity-50 border border-gray-300   hover:text-gray-700">
                        <span className="sr-only">Next</span>
                        <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                        </svg>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
