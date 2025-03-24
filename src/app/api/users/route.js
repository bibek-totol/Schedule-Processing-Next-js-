// import { NextResponse } from 'next/server'
import clientPromise from '../../../../lib/mongodb';


export async function GET() {
    try {
        const client = await clientPromise;
      console.log("Database connected:", client !== undefined);

        const db = client.db("mydatabase");
        const collection = db.collection("users");

        const users = await collection.find({}).toArray();
        console.log(users);

        return new Response(JSON.stringify({
            message: "User Found and fetched successfully",
            users: users,
        }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
    } catch (error) {
        console.error("Error User fetching tasks:", error);
        return new Response(JSON.stringify({ error: "Error User fetching tasks" }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}
