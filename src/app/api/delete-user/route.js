"use server";
import clientPromise from "../../../../lib/mongodb";

export async function DELETE(req) {
  try {
    const { email } = await req.json();
    console.log(email)

    const client = await clientPromise;
    const db = client.db("mydatabase");

    const result = await db.collection("users").deleteOne({ email: email });
    console.log(result);

    let socialResult = { deletedCount: 0 };

    if (result.deletedCount === 0) {
      socialResult = await db.collection("users").deleteOne({ userEmail: email });
    }

    if (result.deletedCount === 0 && socialResult.deletedCount === 0 ) {
      return new Response(JSON.stringify({ message: "User not found" }), { status: 404 });
    }

    // if (result.deletedCount === 0) {
    //   return new Response(JSON.stringify({ message: "User not found" }), { status: 404 });
    // }

    return new Response(JSON.stringify({ message: "User deleted successfully" }), { status: 200 });
  } catch (error) {
    console.error("Delete error:", error);
    return new Response(JSON.stringify({ message: "Something went wrong" }), { status: 500 });
  }
}