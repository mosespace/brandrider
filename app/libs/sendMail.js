var nodemailer = require("nodemailer");

export async function sendMail(subject, email, message) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
      pass: process.env.NEXT_PUBLIC_NODEMAILER_PW,
    },
  });

  var mailOptions = {
    from: email,
    to: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
    subject: subject,
    text: `*Message:* ${message}\n\n*Senders Address:*: ${email}\n\nComing From *BrandRiderUg Official* Website`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    // console.log("Your Email Sent", info);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error(error);
  }
}
