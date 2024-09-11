import nodemailer from "nodemailer";
export const emailSent = (email, companyEmail, CC, output, subject) => {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      // host: "smtp.gmail.com",
      host: "deep-ai.us",
      port: 465,
      secure: true, // use SSL
      // service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.APP_PASSWORD,
      },
    });
    var mailOptions = {
      from: process.env.EMAIL,
      to: companyEmail,
      cc: CC,
      subject: subject,
      html: output,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Email sent: " + info.response);
        resolve(true);
      }
    });
  });
};
