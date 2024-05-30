'use client'


const error = ({ error }) => {

  return <div className="flex items-center justify-center h-screen ">
    <div className="text-center w-full">
      <h3 className="text-xl font-bold text-red-500 mb-6">{error.message}</h3>
    </div>
  </div>
}

export default error
