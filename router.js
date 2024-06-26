const express = require("express");
const manifest = require("./manifest");

const { conversations, currentConversation } = require('./debug_data/dialogs');

const router = express.Router();

router.get("/", (req, res) => res.render("index", { baseUrl: process.env.BASE_URL }));

router.get("/manifest.json", (req, res) => res.json(manifest));

router.get("/project-menu/", (req, res) => res.render("project-menu", { isAuthorized: res.locals.isAuthorized, conversations, currentConversation }));

module.exports = router;