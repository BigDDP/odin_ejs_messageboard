const router = require("express").Router();
const query = require("../db/queries")

const dateFormatter = (date) => {
    const pad = (n) => String(n).padStart(2, "0");

    const dd = pad(date.getDate());
    const mm = pad(date.getMonth() + 1);
    const yy = pad(date.getFullYear() % 100);
    const hours = date.getHours();
    const hh = pad(hours % 12 || 12);
    const min = pad(date.getMinutes());
    const tt = hours < 12 ? "AM" : "PM";

    return `${dd}/${mm}/${yy} ${hh}:${min} ${tt}`;
}

router.get("/", async (req, res) => {
    const globalMessages = await query.getAllMessages();
    res.render("index", { globalMessages });
});

router.get("/messages/:id", async (req, res) => {
    const globalMessages = await query.getAllMessages();
    const message = globalMessages.find((m) => m.id === Number(req.params.id));
    if (!message) return res.status(404).send("Message not found");
    res.render("message", { message });
});

module.exports = router;
module.exports.dateFormatter = dateFormatter