import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { email, subject, message } = await req.json();
  await connectMongoDB();
  // const newComment = await Comments.create({ name, comment, img, email });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "abelbeyene373@gmail.com",
      pass: process.env.APP_PASSWORD,
    },
  });
  const mailOptions = {
    from: "c40hyfmonday@gmail.com",
    to: "c40hyfmonday@gmail.com",
    subject: subject,
    text: message + " from " + email,
  };

  transporter.sendMail(mailOptions, function (error) {
    if (error) {
      res.status(500).send(error.message);
      return NextResponse.json(
        { message: "error while sending to email", error },
        { status: 500 }
      );
    } else {
      res.status(200).send("Email sent successfully.");
      return NextResponse.json(
        { message: "Email sent successfully" },
        { status: 200 }
      );
    }
  });
  return NextResponse.json(
    { message: "Email sent to admin successfully" },
    { status: 201 }
  );
}
