import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, phone, country, state, city, message, phoneCode, productDescription } = await request.json();

    const locationDetails = [
      country,
      state && state.trim() ? state : null,
      city && city.trim() ? city : null,
    ]
      .filter(Boolean) // Remove null or undefined values
      .join(", ");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let emailField = email ? `<p><span>Email:</span> ${email}</p>` : "";
    let messageField = productDescription ? `<p><span>Product Description:</span> ${productDescription}</p>` : `<p><span>Message:</span> ${message}</p>`;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Inquiry Received from ${country}`,
      html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            color: #333;
            margin: 0;
            padding: 0;
          }
          .container {
            width: 90%;
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            overflow: hidden;
          }
          .header {
            background-color: #4CAF50;
            color: white;
            text-align: center;
            padding: 4px 0;
          }
          .content {
            padding: 20px;
          }
          .content p {
            margin: 10px 0;
          }
          .content p span {
            font-weight: bold;
          }
          .footer {
            text-align: center;
            background-color: #f1f1f1;
            padding: 10px;
            font-size: 12px;
            color: #777;
          }
          .footer a {
            color: #4CAF50;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Inquiry Received</h2>
          </div>
          <div class="content">
            <p>New inquiry is received by <span>${name}</span> from <span>${locationDetails}</span>.</p>
            <hr>
            ${emailField}
            <p><span>Phone:</span> +${phoneCode} ${phone}</p>
            ${messageField}
          </div>
        </div>
      </body>
      </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Email sent successfully" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Failed to send email" }), {
      status: 500,
    });
  }
}
