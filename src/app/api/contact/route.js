import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    // Destructure captcha from body
    const { name, email, enquiryType, message, captcha } = body;

    // Verify Captcha
    // const verifyRes = await fetch(
    //   `https://www.google.com/recaptcha/api/siteverify`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/x-www-form-urlencoded",
    //     },
    //     // Fixed: Ensure captcha variable is defined from body
    //      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`,
    //   }
    // );

    // const captchaData = await verifyRes.json();

    // if (!captchaData.success) {
    //   return Response.json({
    //     success: false,
    //     message: "Captcha verification failed",
    //   });
    // }

    // TRANSPORTER
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, 
      },
    });

    // MAIL OPTIONS
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: "mail@anglobalservices.com",
      subject: `New Enquiry - ${enquiryType}`,
      html: `
        <h2>New Enquiry Received From India Laser</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Type:</strong> ${enquiryType}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return Response.json({ success: true });

  } catch (error) {
    console.error("Mail Error:", error);
    return Response.json({ success: false, message: error.message });
  }
}