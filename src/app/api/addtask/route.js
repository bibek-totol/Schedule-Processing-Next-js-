import { NextResponse } from 'next/server'
import clientPromise from '../../../../lib/mongodb';


export async function GET() {
    try {
        const client = await clientPromise;
      console.log("Database connected:", client !== undefined);

        const db = client.db("mydatabase");
        const collection = db.collection("all-tasks");

        const items = await collection.find({}).toArray();
        console.log(items);

        return new Response(JSON.stringify({
            message: "Task Found and fetched successfully",
            tasks: items,
        }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
    } catch (error) {
        console.error("Error fetching tasks:", error);
        return new Response(JSON.stringify({ error: "Error fetching tasks" }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}

export async function POST(req) {
    try {
        const client = await clientPromise;
        const db = client.db("mydatabase");
        const collection = db.collection("all-tasks");
        

      

     const {name, task, date, time, priority,assignedTo} = await req.json();
        if (!task) {
            
            return NextResponse.json({ error: 'Task is required' }, { status: 500 })
        }

        const newItem = await collection.insertOne({ name, task, date, time, priority,assignedTo });

        return NextResponse.json({  message: "Task added successfully" }, { status: 201 })
    } catch (error) {
        console.error("Error adding task:", error);

        return NextResponse.json({ error: 'Error adding task' }, { status: 500 })
    }
}
