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



export async function PATCH(request) {
  const requestBody = await request.json();

  try {
    const db = await getDb();
    const collection = db.collection('users');
    const filter = { email: requestBody.email };
    const updateOperation = {};
    if (requestBody.jobTitle) {
      updateOperation.jobTitle = requestBody.jobTitle;
    }
    if (requestBody.city) {
      updateOperation.city = requestBody.city;
    }
    if (requestBody.phoneNumber) {
      updateOperation.phoneNumber = requestBody.phoneNumber;
    }
    if (requestBody.imageURL) {
      updateOperation.imageURL = requestBody.imageURL;
    }

    const result = await collection.updateOne(filter, { $set: updateOperation });

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