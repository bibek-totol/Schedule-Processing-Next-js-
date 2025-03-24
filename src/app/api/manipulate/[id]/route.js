import { ObjectId } from "mongodb";
import clientPromise from "../../../../../lib/mongodb";
import { NextResponse } from 'next/server';

export async function DELETE(req, { params }) {
    try {
        const client = await clientPromise;
        const db = client.db("mydatabase");
        const collection = db.collection("all-tasks");

        
        const { id } = params; 

        if (!id || !ObjectId.isValid(id)) {
            return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
        }

        const query = { _id: new ObjectId(id) };
        const deletedItem = await collection.deleteOne(query);
        console.log(deletedItem);

        if (deletedItem.deletedCount === 0) {
            return NextResponse.json({ error: "Item not deleted and found" }, { status: 404 });
        }


       
        return NextResponse.json({ message: "Item deleted successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error deleting item:", error);
        return NextResponse.json({ message: "Error deleting item" }, { status: 500 });
    }
}



export async function PATCH(req,{params}){
    try {
   

        const client = await clientPromise;
        const db = client.db("mydatabase");
        const collection = db.collection("all-tasks");

        const {id} =params;

        if (!id || !ObjectId.isValid(id)) {
            return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
        }

        const { name, task, date, time, priority} = await req.json();
        if (!task || !date || !time || !priority || !name) {
            return NextResponse.json({ error: "Task is required" }, { status: 400 });
        }

        const query = { _id: new ObjectId(id) };

        const updatedItem = await collection.updateOne(query, { $set: { 
            name,
            task,
            date,
            time,
            priority
         } });


        if (updatedItem.modifiedCount === 0) {
            return NextResponse.json({ error: "Task not updated and found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Task updated successfully" }, { status: 200 });

    }catch (error) {
        console.error("Error editing task:", error);
    }
}
