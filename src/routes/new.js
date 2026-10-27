const router = require("express").Router();
const query = require("../db/queries")

router.get("/", (req, res) => res.render("form"));

router.post("/", async (req, res) => {
    const { authorName, messageText } = req.body;

    const message = {
        text: messageText,
        user: authorName, 
        added: new Date()
    }

    await query.postMessage(message)

    res.redirect("/");
});


module.exports = router;