import React from "react";

function PrivacyPolicy() {
  let policyData = ` <h1>Privacy Policy for AlrightTech</h1>

  <p>At AlrightTech, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our services.</p>

  <h2>Information We Collect</h2>

  <p>We may collect personal information such as your name, email address, contact information, and other details you provide when you register an account, make a purchase, or interact with our website or applications. We may also collect non-personal information such as device information, IP addresses, and usage data.</p>

  <h2>How We Use Your Information</h2>

  <p>We use the information we collect to provide, maintain, and improve our services, customize your experience, communicate with you, process transactions, and comply with legal obligations. We may also use your information to send you promotional materials and updates about our products and services.</p>

  <h2>Information Sharing and Disclosure</h2>

  <p>We do not sell, trade, or rent your personal information to third parties. However, we may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you. We may also disclose your information when required by law or to protect our rights, property, or safety.</p>

  <h2>Data Security</h2>

  <p>We implement industry-standard security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

  <h2>International Data Transfers</h2>

  <p>Your information may be transferred to and stored on servers located outside of your country or jurisdiction, including but not limited to Pakistan. By using our services, you consent to the transfer of your information to these locations.</p>

  <h2>Your Rights and Choices</h2>

  <p>You have the right to access, update, or delete your personal information. You may also opt-out of receiving promotional communications from us. However, please note that certain information is necessary for the provision of our services, and opting out may affect your ability to use our services.</p>

  <h2>Changes to This Privacy Policy</h2>

  <p>We reserve the right to update or modify this Privacy Policy at any time. We will notify you of any changes by posting the updated policy on our website. Your continued use of our services after the changes are made constitutes acceptance of the updated Privacy Policy.</p>

  <h2>Contact Us</h2>

  <p>If you have any questions, concerns, or complaints regarding this Privacy Policy or our data practices, please contact us at <a href="mailto:contact@alrighttech.com">contact@alrighttech.com</a>.</p>

  <p>This Privacy Policy was last updated on 23 May 2024.</p>`;
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
        PRIVACY POLICY
      </h1>
      <div
        className="text-white font-monosans text-wrap leading-10"
        dangerouslySetInnerHTML={{ __html: policyData }}
      ></div>
    </div>
  );
}

export default PrivacyPolicy;
