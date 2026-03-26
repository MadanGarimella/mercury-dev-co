import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({ name, email, message }) => {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: process.env.EMAIL_USER,
    subject: "New Lead from Mercury Dev Co",
    html: `
      <h3>New Lead</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b> ${message}</p>
    `,
  });
};