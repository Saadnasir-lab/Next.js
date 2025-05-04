import nodemailer from "nodemailer";
import dotenv from 'dotenv/config'

export async function POST(req) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_ACCOUNT,
            pass: process.env.GOOGLE_APP_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.GMAIL_ACCOUNT,
        to: "sufianjaved2419237@gmail.com",
        subject: "Test Email",
        text: "What are you doing?"
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("✅ Email sent successfully.");
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error("❌ Error sending email:", error);
        return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
    }
}
