const { MongoClient, ObjectId } = require('mongodb');

let connectionInstance = null;

async function connectToDB() {
  if (connectionInstance) return connectionInstance;

  const client = new MongoClient(process.env.MONGODB_CONNECTIONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const connection = await client.connect();
  connectionInstance = connection.db(process.env.MONGO_DB_NAME);
  return connectionInstance;
}

async function getUserByCredentials(username, password) {
  const client = await connectToDB();
  const collection = await client.collection('users');
  const user = await collection.findOne({
    name: username,
    password: password,
  });
  if (!user) return null;
  return user;
}

async function saveResultsToDatabase(result) {
  const client = await connectToDB();
  const collection = await client.collection('results');
  const { insertedId } = await collection.insertOne(result);
  return insertedId;
}

async function getResultById(id) {
  const client = await connectToDB();
  const collection = client.collection('results');
  const result = await collection.findOne({ _id: new ObjectId(id) });
  if (!result) return null;

  return result;
}

module.exports = {
  getUserByCredentials,
  saveResultsToDatabase,
  getResultById,
};
