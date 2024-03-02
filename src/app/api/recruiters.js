import { MongoClient } from 'mongodb';
export default async function handler(req, res) {
    if (req.method === 'GET') {
      try {
        const client = await MongoClient.connect(process.env.MONGODB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
  
        const db = client.db();
        const recruitersCollection = db.collection('recruiters');
        const recruiters = await recruitersCollection.find({}).toArray();
  
        client.close();
        res.status(200).json(recruiters);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }