import React from "react";

function TermsAndCondition() {
  return (
    <div className="px-[35px] py-[30px] sm:px-[72px] sm:py-[35px] lg:px-[120px] lg:pt-10 xl:px-[160px] flex flex-col gap-2 sm:gap-2 lg:gap-3">
      <h1
        className="font-varino text-[26px] sm:text-[35px]"
        style={{
          background: "linear-gradient(to bottom, white, gray)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        TERMS AND CONDITIONS
      </h1>
      <p className="text-white font-monosans text-wrap">
        Welcome to AlrightTech! By accessing our website, you agree to comply
        with these terms and conditions. We collect and use cookies in
        accordance with our Privacy Policy. You may not republish, sell, or
        redistribute our content without prior permission. We reserve the right
        to monitor and remove inappropriate comments. Your use of our website
        constitutes acceptance of these terms. For more details, please refer to
        our full Terms and Conditions.
      </p>
    </div>
  );
}

export default TermsAndCondition;
