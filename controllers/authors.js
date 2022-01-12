const db = require("../models")

const index = (req, res) => {
    //mongoose
    db.Author.find({}, (err, authors) => {
        if (err) return res.send(err);

        const context = { authors: authors};

        return res.render("authors/index", context);
    })
}


module.exports = {
    index,

}