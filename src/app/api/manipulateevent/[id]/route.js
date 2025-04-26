import { ObjectId } from "mongodb";
import clientPromise from "../../../../../lib/mongodb";
import { NextResponse } from 'next/server';

export async function DELETE(req, { params }) {
    try {
        const client = await clientPromise;
        const db = client.db("mydatabase");
        const collection = db.collection("events");

        
        const { id } = params; 

        if (!id || !ObjectId.isValid(id)) {
            return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
        }

        const query = { _id: new ObjectId(id) };
        const deletedItem = await collection.deleteOne(query);
        console.log(deletedItem);

        if (deletedItem.deletedCount === 0) {
            return NextResponse.json({ error: "Event not deleted and found" }, { status: 404 });
        }


       
        return NextResponse.json({ message: "Event deleted successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error deleting item:", error);
        return NextResponse.json({ message: "Error deleting Event" }, { status: 500 });
    }
}



export async function PATCH(req,{params}){
    try {
   

        const client = await clientPromise;
        const db = client.db("mydatabase");
        const collection = db.collection("events");

        const {id} =params;

        if (!id || !ObjectId.isValid(id)) {
            return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
        }

        const { creator,title,start,end} = await req.json();
        if (!title || !start || !end) {
            return NextResponse.json({ error: "Event is required" }, { status: 400 });
        }

        const query = { _id: new ObjectId(id) };

        const updatedItem = await collection.updateOne(query, { $set: { 
            creator,title,start,end
         } });


        if (updatedItem.modifiedCount === 0) {
            return NextResponse.json({ error: "Event not updated and found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Event updated successfully" }, { status: 200 });

    }catch (error) {
        console.error("Error editing event:", error);
    }
}
