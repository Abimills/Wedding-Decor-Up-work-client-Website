import connectMongoDB from "@/libs/mongodb";
import Comments from "@/models/comment";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  await connectMongoDB();
  const comments = await Comments.find();
  return NextResponse.json(
    { message: "fetched all comments", comments },
    { status: 200 }
  );
}
export async function POST(req) {
  const { name, comment, img, email } = await req.json();
  await connectMongoDB();
  const newComment = await Comments.create({ name, comment, img, email });
  return NextResponse.json(
    { message: "fetched all comments", newComment },
    { status: 201 }
  );
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Comments.findByIdAndDelete(id);
  return NextResponse.json({ message: "comment deleted" }, { status: 200 });
}
