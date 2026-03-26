import { Resend } from "resend";

export const sendEmail = async ({ name, email, message }) => {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    // 🔍 Debug log (temporary)
    console.log("ENV CHECK:", apiKey ? "API KEY FOUND" : "API KEY MISSING");

    if (!apiKey) {
      throw new Error("RESEND_API_KEY is missing in environment variables");
    }

    const resend = new Resend(apiKey);

    const response = await resend.emails.send({
      from: "onboarding@resend.dev", // safe default
      to: process.env.EMAIL_USER,
      subject: "New Lead from Mercury Dev Co",
      html: `
        <h3>New Lead</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    console.log("Email sent:", response);

    return response;

  } catch (error) {
    console.error("EMAIL SERVICE ERROR:", error.message);
    throw error; // important → controller handles response
  }
};