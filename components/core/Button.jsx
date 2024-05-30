import React from 'react';

const Button = ({ onClick, children }) => {
    return (
        <button
            className=" hover:bg-gray-400  hover:bg-opacity-50 transition-colors duration-300 inline-flex py-2 lg:py-3 px-5 lg:px-8 justify-center items-center gap-10 flex-shrink-0 bg-gradient-to-r rounded-full border-2 border-white border-opacity-50 shadow-xl"
            onClick={onClick}
        >
            <span className="text-white text-[14px] sm:text-[16px] xl:text-[18px]">{children}</span>
        </button>
    );
};

export default Button;
