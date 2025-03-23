import clientPromise from "../../../../lib/mongodb";

export async function POST(req) {
  const { username, email, password, photoURL } = await req.json();

  const client = await clientPromise;
  const db = client.db("mydatabase");

  const existingUser = await db.collection("users").findOne({ email });
  if (existingUser) {
    return new Response(JSON.stringify({ error: "User already exists" }), { status: 400 });
  }

  await db.collection("users").insertOne({ username, email, password, photoURL });

  return new Response(JSON.stringify({ message: "User registered" }), { status: 201 });
}