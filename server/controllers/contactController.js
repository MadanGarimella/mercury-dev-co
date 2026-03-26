import { sendEmail } from "../services/emailService.js";

export const submitContact = async (req, res) => {
  try {
    console.log("Incoming request:", req.body);

    const { name, email, message } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: "Required fields missing" });
    }

    console.log("Sending email...");

    await sendEmail({ name, email, message });

    console.log("Email sent");

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("ERROR:", error);
    res.status(500).json({ error: error.message });
  }
};
