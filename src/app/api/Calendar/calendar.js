const { MongoClient } = require('mongodb');

async function main() {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();

    //connect to the database
    const database = client.db(process.env.DB);
    //create events collection
    const events = database.collection('events');

    // create an event
    const event = {
      title: 'Party',
      date: '2022-12-12',
      time: '12:00',
      location: 'My House'
    };

    // insert the event
    const add = await events.insertOne(event);

    const result = await events.find();

    console.log(result);

    console.log(`A event was inserted with the following id: ${add.insertedId}`);
  } finally {
    await client.close();
  }
}



main().catch(console.error);