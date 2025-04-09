
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import clientPromise from "../../../../lib/mongodb";


export async function POST(req, res) {


  const { email } =await  req.json();
  const client = await clientPromise;
  const db = client.db("mydatabase");
  const users = db.collection("users");

  const user = await users.findOne({ email });

  


  if (!user) {
    return new Response(
      JSON.stringify({ message: "User not found" }),
      { status: 404 }
    );
  }

  
  const token = jwt.sign( { email }, process.env.JWT_SECRET, { expiresIn: "1h" });

  const resetLink = `${process.env.NEXTAUTH_URL}/reset-password/${token}`;


  
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Provider" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Reset your password",
    html: `
      <p>You requested a password reset.</p>
      <p>Click <a href="${resetLink}">here</a> to reset your password.</p>
      <p>This link will expire in 1 hour.</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Password reset email sent successfully" }),
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ message: "Failed to send email" }),
      { status: 500 }
    );
  }
}
