
import jwt from "jsonwebtoken";
import clientPromise from "../../../../lib/mongodb";

export async function POST(request) {
    try {
        const { token, password } = await request.json();

        const client = await clientPromise;
        const db = client.db("mydatabase");
        const users = db.collection("users");

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        const email = decodedToken.email;

        if (!email) {
            return new Response(
              JSON.stringify({ message: "Invalid or expired token" }),
              { status: 400 },
              
            );
          }

        await users.updateOne(
            { email },
            { $set: { password: password } }
          );
      
          return new Response(
            JSON.stringify({ message: "Password updated successfully"}),
            { status: 200 },
            
          );

               


}
catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ message: "Invalid or expired token" }),
      { status: 400 },
     
    );
  }
}