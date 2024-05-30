import React from 'react'
import Gradient1 from "../../../public/svgs/gradient1.svg";
import Gradient2 from "../../../public/svgs/gradient2.svg";
import rightGradient from "../../../public/svgs/right.svg";
import Image from "next/image";

const BackgroundGradients = () => {
    return (
        <>
            {/* Background gradients */}
            <div className="absolute right-0 top-0 -z-10">
                <Image className="xl:w-full w-auto" alt="gradient2" src={Gradient2} />
            </div>
            <div className="absolute left-0 -z-10">
                <Image className="xl:w-full w-auto" alt="gradient1" src={Gradient1} />
            </div>
            <div className="absolute right-0 top-96 -z-10">
                <Image className="xl:w-full w-auto" alt="gradient1" src={rightGradient} />
            </div>
        </>
    )
}

export default BackgroundGradients