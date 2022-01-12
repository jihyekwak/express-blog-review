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

module.exports = router;