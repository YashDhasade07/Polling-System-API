import mongoose from "mongoose";

// const DATABASE_URL = 'mongodb://127.0.0.1:27017/PollingAPI';
const DATABASE_URL = 'mongodb+srv://yashnd20comp:2TeWE1Y5ItB5Ol0m@atlas.eytsn.mongodb.net/PollingAPI';

// Establish connection to MongoDB using Mongoose
mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Access the default connection instance
const databaseConnection = mongoose.connection;

// Handle connection errors
databaseConnection.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

// Handle successful connection
databaseConnection.once('open', () => {
  console.log('Connected to MongoDB Database ');
});
 
// Export the mongoose instance for use in other files
export default mongoose; 