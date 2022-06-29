const { connect, connection } = require('mongoose');

// Wrap Mongoose around local connection to MongoDB
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/compDB';

connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Export connection 
module.exports = connection;