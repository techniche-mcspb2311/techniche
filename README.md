This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started with Next.js

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Getting Started with MUI

[MUI](https://mui.com/) is a React.js library that uses React components to represent re-usable
UI components. You can view the UI components it provides for us out-of-the-box in the
[components library](https://mui.com/material-ui/all-components/); to view the code, just click
"show code" underneath an example to learn how to use the component.

## Getting Started with Docker

Before starting `docker compose`, you'll have to tell it about the environment variables
it expects to be present - you'll have to manually load your `.env.local` file:

```bash
set -a; source .env.local; set +a
```

This loads the environment variables, and allows them to be passed to child processes.

### Getting MongoDB

[MongoDB](https://www.mongodb.com/) is our database - to start an instance of MongoDB, we can use
`docker compose`; where it will start and configure it for local development. From a new terminal,
run the following:

```bash
docker compose up mongo
```

> Note: __DON'T INSTALL MONGODB - DOCKER DOES IT FOR YOU__

After you're done, you can type `Ctrl+C` to stop the database. If you want to wipe it from your
system, you can run the `down` subcommand:

```bash
docker compose down
```

Here's a step-by-step guide on connecting to your database:

- Install the mongodb package using npm: npm install mongodb
- Import MongoClient from the mongodb package: const { MongoClient } = require('mongodb');
- Connect to your MongoDB database using the connection string. If your MongoDB is running in another Docker container, make sure to use the name of that container as the hostname in your connection string.
- Use the db method to get a reference to your database, and the collection method to get a reference to the collection you want to interact with.
- Use the insertOne, find, updateOne, etc. methods to interact with your collection.

Here's how the code would look:

const { MongoClient } = require('mongodb');

async function main() {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();

    const database = client.db(process.env.DB);
    const users = database.collection('users');

    // Insert a document
    const doc = { email: process.env.ADMIN_EMAIL, isAdmin: true };
    const result = await users.insertOne(doc);

    console.log(`Inserted document with _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

- Remember to replace process.env.MONGODB_URI with your actual MongoDB connection string, and process.env.DB with the name of your database. Also, make sure to handle errors appropriately in your production code.

## Generate Inline Documentation

Is the codebase getting a little too big? Try generating some inline documentation, so you can
search through it quickly in your browser:

```bash
npm run docs
```

This will create a folder `./docs/` with a bunch of html in it. Open `docs/index.html` and you'll
see references to the code in the codebase.
