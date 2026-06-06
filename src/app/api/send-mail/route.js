import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, type, message, captcha } = await req.json();

    // ✅ 1. VERIFY CAPTCHA
    const verifyRes = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=YOUR_SECRET_KEY&response=${captcha}`,
      }
    );

    const captchaData = await verifyRes.json();

    if (!captchaData.success) {
      return Response.json({
        success: false,
        message: "Captcha failed",
      });
    }

    // ✅ 2. EMAIL CONFIG
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "YOUR_EMAIL@gmail.com",
        pass: "YOUR_APP_PASSWORD",
      },
    });

    // ✅ 3. SEND EMAIL
    await transporter.sendMail({
      from: email,
      to: "YOUR_EMAIL@gmail.com",
      subject: `New Enquiry from ${name}`,
      html: `
        <h3>New Enquiry</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Type:</b> ${type}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error(error);
    return Response.json({ success: false });
  }
}