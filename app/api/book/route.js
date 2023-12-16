import connectMongoDB from "@/libs/mongodb";
import Book from "@/models/book";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  await connectMongoDB();
  const bookings = await Book.find();
  return NextResponse.json(
    { message: "fetched all bookings", bookings },
    { status: 200 }
  );
}
export async function POST(req) {
  const {
    name,
    email,
    phoneNumber,
    city,
    place,
    eventType,
    eventDate,
    description,
  } = await req.json();
  await connectMongoDB();
  const newBooking = await Book.create({
    name,
    email,
    phoneNumber,
    city,
    place,
    eventType,
    eventDate,
    description,
  });
  return NextResponse.json(
    { message: "created a new booking", newBooking },
    { status: 201 }
  );
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Book.findByIdAndDelete(id);
  return NextResponse.json({ message: "booking deleted" }, { status: 200 });
}
