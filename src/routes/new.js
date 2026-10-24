const { globalMessages } = require("./index");
const { dateFormatter } = require("./index");
const router = require("express").Router();

router.get("/", (req, res) => res.render("form"));

router.post("/", (req, res) => {
    const { authorName, messageText } = req.body;

    const message = {
        id: globalMessages.length + 1,
        text: messageText,
        user: authorName, 
        added: dateFormatter(new Date())
    }

    globalMessages.push(message)

    res.redirect("/");
});


module.exports = router;