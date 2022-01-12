const req = require("express/lib/request");
const res = require("express/lib/response");
const db = require("../models")

const index = (req, res) => {
    //mongoose
    db.Author.find({}, (err, allAuthors) => {
        if (err) return res.send(err);

        const context = { authors: allAuthors};

        return res.render("authors/index", context);
    })
}

const show = (req, res) => {
    db.Author.findById(req.params.id, (err, foundAuthor) => {
        if (err) return res.send(err)
        const context = { author: foundAuthor }
        return res.render("authors/show", context)
    })
}

const newAuthor = (req, res) => {
    return res.render("authors/new")
}

const create = (req, res) => {
    db.Author.create(req.body, (err, createdAuthor) => {
    if (err) return res.send(err)
    return res.redirect("/authors")
})
}

const edit = (req, res) => {
    db.Author.findById(req.params.id, (err, foundAuthor) => {
        if (err) return res.send(err)
        const context = {author: foundAuthor}
        return res.render("authors/edit", context)
    })
}

const update = (req, res) => {
    db.Author.findByIdAndUpdate(
        req.params.id, {
            $set: {
                ...req.body
            }
        },
        {new: true},
        (err, updatedAuthor) => {
            if (err) return res.send(err)
            return res.redirect(`/authors/${updatedAuthor._id}`)
        }
    )
}

const destroy = (req, res) => {
    db.Author.findByIdAndDelete(req.params.id, (err, deletedAuthor) => {
        if (err) return res.send(err)
        return res.redirect("/authors")
    })
}

module.exports = {
    index,
    show,
    newAuthor,
    create,
    edit,
    update,
    destroy
}