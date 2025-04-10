// import { NextResponse } from "next/server";
"use server";
import clientPromise from "../../../../lib/mongodb";

export async function PATCH(req) {
    try {
        const client = await clientPromise;
        const db = client.db("mydatabase");

        const userInfo = await req.json();
        console.log("Received userInfo:", userInfo);

        const { userEmail, updatedUsername, updatedPhotoURL } = userInfo;

        const user = await db.collection("users").findOne({ userEmail: userEmail });
        console.log("found user in database" ,user);

        const result = await db.collection("users").updateOne(
            { userEmail },
            {
                $set: {
                    name: updatedUsername,
                    photoURL: updatedPhotoURL,
                },
            }
        );

        if (result.matchedCount === 0) {
            return new Response(JSON.stringify({ message: "User not found" }), {
                status: 404,
                headers: { "Content-Type": "application/json" },
            });
        }

        return new Response(JSON.stringify({ message: "User updated successfully" }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });

    } catch (error) {
        console.error("Error in PATCH /api/update-user:", error);
        return new Response(JSON.stringify({ message: "Internal Server Error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });

    }
};
