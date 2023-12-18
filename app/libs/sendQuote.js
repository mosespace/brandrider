var nodemailer = require("nodemailer");

export async function sendQuote(full_Names, email_address, project_brief) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
      pass: process.env.NEXT_PUBLIC_NODEMAILER_PW,
    },
  });

  var mailOptions = {
    from: email_address,
    to: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
    subject: "Quote",
    text: `*Client Names:* ${full_Names}\n\n*Clients Address:*: ${email_address}\n\n *Subject* ${project_brief}\n\n Coming From *BrandRiderUg Official* Website`,
  };
  try {
    const info = await transporter.sendMail(mailOptions);
    // console.log("Your Email Sent", info);
    return true;
  } catch (error) {
    console.error("Error sending quote:", error);
    throw new Error(error);
  }
}
