import clientPromise from "../../../../lib/mongodb";

export async function POST(req) {
  const { username, email, password, photoURL } = await req.json();
  let role;

  if(email.includes("admin@gmail.com") || email.includes("Admin@gmail.com") || email.includes("ADMIN@gmail.com") || username.includes("admin") || username.includes("Admin") || username.includes("ADMIN")){
    role = "admin";

  }
  else{
    role = "employee";
  }
  const client = await clientPromise;
  const db = client.db("mydatabase");

  const existingUser = await db.collection("users").findOne({ email });
  if (existingUser) {
    return new Response(JSON.stringify({ error: "User already exists" }), { status: 400 });
  }



  const newUser = {
    username,
    email,
    password,
    photoURL,
    role,
    failedAttempts: 0,
    lockUntil: null,
  };


  if(role === "admin") {
    const duplicate_user = await db.collection("users").findOne({ email });
    if(duplicate_user){
      return new Response(JSON.stringify({ error: "Admin already exists" }), { status: 400 });
    }
    await db.collection("users").insertOne(newUser);

  }

  else{
    await db.collection("users").insertOne(newUser);
  }



  return new Response(JSON.stringify({ message: "User registered" }), { status: 201 });
}