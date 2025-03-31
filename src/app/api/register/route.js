import clientPromise from "../../../../lib/mongodb";

export async function POST(req) {
  const { username, email, password, photoURL } = await req.json();
  let role;

  if(email.includes("admin") || email.includes("Admin") ){
    role = "admin";

  }
  const client = await clientPromise;
  const db = client.db("mydatabase");

  const existingUser = await db.collection("users").findOne({ email });
  if (existingUser) {
    return new Response(JSON.stringify({ error: "User already exists" }), { status: 400 });
  }


  if(role === "admin") {
    const duplicate_user = await db.collection("users").findOne({ email });
    if(duplicate_user){
      return new Response(JSON.stringify({ error: "Admin already exists" }), { status: 400 });
    }
    await db.collection("users").insertOne({ username, email, password, photoURL,role });

  }

  else{
    await db.collection("users").insertOne({ username, email, password, photoURL });
  }



  return new Response(JSON.stringify({ message: "User registered" }), { status: 201 });
}