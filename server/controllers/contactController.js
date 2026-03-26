import { sendEmail } from "../services/emailService.js";

export const submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: "Required fields missing" });
    }

    await sendEmail({ name, email, message });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("ERROR:", error.message);
    res.status(500).json({ error: error.message });
  }
};