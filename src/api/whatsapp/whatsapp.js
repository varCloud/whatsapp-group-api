const { Router } = require("express");
const router = Router();
const WhatsappController = require("./whatsapp.controller");
const { validateToken } = require("../token/tokenController");

router.post("/", WhatsappController.sendMessageGroup);
module.exports = router;
