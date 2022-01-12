const express = require("express");
const router = express.Router();

const ctrl = require("../controllers");

// routes
/*
index - get - /authors
new - get - /authors/new
show - get - /authors/:id
create - post - /authors
edit - get - /authors/:id/edit
update - put - /authors/:id
delete - delete - /authors/:id
*/

router.get("/", ctrl.authors.index);
router.get("/new", ctrl.authors.newAuthor);
router.get("/:id", ctrl.authors.show);
router.get("/:id/edit", ctrl.authors.edit);
router.post("/", ctrl.authors.create);
router.put("/:id", ctrl.authors.update);
router.delete("/:id", ctrl.authors.destroy);

module.exports = router;