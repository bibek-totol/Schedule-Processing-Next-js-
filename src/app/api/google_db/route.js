import clientPromise from "../../../../lib/mongodb";

export async function POST(req) {
  const { email,image,name } = await req.json();
  console.log("google db",email, name);
 
  const client = await clientPromise;
  const db = client.db("mydatabase");

  const existingUser = await db.collection("users").findOne({ email: email });
  if (existingUser) {
    return new Response(JSON.stringify({ error: "User already exists" }), { status: 400 });
  }
  
    await db.collection("users").insertOne({email,image,name});




  return new Response(JSON.stringify({ message: "User registered" }), { status: 201 });
}