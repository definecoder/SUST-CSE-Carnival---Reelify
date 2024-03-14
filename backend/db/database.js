const dotenv = require("dotenv");
dotenv.config();

dbUrl = process.env.MONGO_URI;
module.exports = { dbUrl };
