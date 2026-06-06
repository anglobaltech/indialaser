import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("API HIT:", body);

    const { name, email, phone, type, message } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"India Laser Website" <${process.env.EMAIL_USER}>`,
      to: "surbhipant0@gmail.com",
      subject: ` New Enquiry Received from India Laser Website `,

      html: `
      <div style="font-family: Arial, sans-serif; background:#f4f6f8; padding:20px;">
        
        <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
          
          <!-- HEADER -->
          <div style="background:#2563eb; color:#ffffff; padding:20px; text-align:center;">
            <h2 style="margin:0;">India Laser</h2>
            <p style="margin:5px 0 0; font-size:14px;">New Website Enquiry</p>
          </div>

          <!-- BODY -->
          <div style="padding:20px;">
            
            <h3 style="color:#111827; margin-bottom:15px;">Customer Details</h3>

            <table style="width:100%; border-collapse:collapse;">
              <tr>
                <td style="padding:8px 0; font-weight:bold;">Name:</td>
                <td style="padding:8px 0;">${name || "N/A"}</td>
              </tr>
              <tr>
                <td style="padding:8px 0; font-weight:bold;">Email:</td>
                <td style="padding:8px 0;">${email || "N/A"}</td>
              </tr>
              <tr>
                <td style="padding:8px 0; font-weight:bold;">Phone:</td>
                <td style="padding:8px 0;">${phone || "N/A"}</td>
              </tr>
              <tr>
                <td style="padding:8px 0; font-weight:bold;">Service Interested In:</td>
                <td style="padding:8px 0;">${type || "N/A"}</td>
              </tr>
            </table>

            <hr style="margin:20px 0; border:none; border-top:1px solid #e5e7eb;" />

            <h3 style="color:#111827; margin-bottom:10px;">Message</h3>
            <p style="background:#f9fafb; padding:12px; border-radius:6px; color:#374151;">
              ${message || "No message provided"}
            </p>

          </div>

          <!-- FOOTER -->
          <div style="background:#f1f5f9; padding:15px; text-align:center; font-size:12px; color:#6b7280;">
            This enquiry was submitted from your website.
          </div>

        </div>
      </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ success: true });

  } catch (error) {
    console.error(error);
    return Response.json({ success: false }, { status: 500 });
  }
}