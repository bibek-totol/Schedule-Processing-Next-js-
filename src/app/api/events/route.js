import { NextResponse } from "next/server";
import clientPromise from "../../../../lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    console.log("Database connected:", client !== undefined);

    const db = client.db("mydatabase");
    const eventsCollection = db.collection("events");

    const events = await eventsCollection.find().toArray();

    return NextResponse.json({ message: "Events fetched successfully", events }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error fetching events", error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json(); 
    const {creator, title, start, end } = body;

    const client = await clientPromise;
    console.log("Database connected:", client !== undefined);

    const db = client.db("mydatabase");
    const eventsCollection = db.collection("events");

    const newEvent = { creator,title, start, end };
    await eventsCollection.insertOne(newEvent);

    return NextResponse.json({ message: "Event saved successfully", event: newEvent }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error saving event", error: error.message }, { status: 500 });
  }
}
