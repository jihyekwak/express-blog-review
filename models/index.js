// require
const mongoose = require("mongoose");
// shortcut to mongoose.connection object created by mongoose.connect
const db = mongoose.connection;
const dbUrl = process.env.DATABASE_URL;
const configs = {
    useCreateIndex = true,
    useFindAndModify = false,
}

mongoose
    .connect(dbUrl)
    .then(() => 
        console.log(
            `MongoDB successfully connected at ${db.host}:${db.port}!`
        )
    )
    .catch((err) => console.log(`MongoDB connection failed :( Error:${err}` ));

module.exports = {
    Author: require("./Author")
}