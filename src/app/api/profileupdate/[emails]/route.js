export async function PATCH(req,{params}){
    try {
   

        const client = await clientPromise;
        const db = client.db("mydatabase");
        const collection = db.collection("events");

        const {emails} =params;

        if (!emails || !ObjectId.isValid(emails)) {
            return NextResponse.json({ error: "Invalid Information" }, { status: 400 });
        }

        const {name,email,image} = await req.json();
        if (!name || !email || !image) {
            return NextResponse.json({ error: "Fill the form is required" }, { status: 400 });
        }

       const query = { email: emails };

        const updatedItem = await collection.updateOne(query, { $set: { 
            username:name,
            email:email,
            photoURL:image

         } });


        if (updatedItem.modifiedCount === 0) {
            return NextResponse.json({ error: "Profile not updated and found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Profile updated successfully" }, { status: 200 });

    }catch (error) {
        console.error("Error editing profile:", error);
    }
}
