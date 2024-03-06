import { mailer } from '@/email';
import {getDb} from '@/db';

export const dynamc = 'force-dynamc';

export async function GET(request) {
    const db = await getDb();
    const collection = db.collection('users');

    const users = await collection.find({}).toArray();
    console.log("here", users)

    return Response.json(users);
}

// export async function PUT(request) {
//     const db = await getDb();
//     const collection = db.collection('users');
//     const userId = request.url.split('/')[2]; // assuming the url format is /api/users/:id
//     const updatedUserData = await request.json();

//     const result = await collection.updateOne(
//         { _id: new BSON.ObjectID(userId) },
//         { $set: updatedUserData }
//     );

//     return Response.json({ message: 'User updated successfully', result });
// }
export async function PUT(request) {
    const requestBody = await request.json();
  
    try {
      const db = await getDb();
      const collection = db.collection('users');
  
      // Assuming you have a schema for the user data with fields like jobTitle, city, phoneNumber, imageURL
      const updatedUser = {
        jobTitle: requestBody.jobTitle,
        city: requestBody.city,
        phoneNumber: requestBody.phoneNumber,
        imageURL: requestBody.imageURL
      };
  
      // Find the user by some unique identifier, for example, their email
      const filter = { email: requestBody.email };
  
      // Update the user data in the database
      const result = await collection.updateOne(filter, { $set: updatedUser });
  
      if (result.modifiedCount === 1) {
        return new Response('User updated successfully', { status: 200 });
      } else {
        throw new Error('Failed to update user');
      }
    } catch (error) {
      console.error('Error updating user:', error);
      return new Response('Failed to update user', { status: 500 });
    }
  }