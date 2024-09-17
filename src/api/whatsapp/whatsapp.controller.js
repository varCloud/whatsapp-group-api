const Wassenger = require("../../core-terceros/wassenger");

class WhatsappController {

    async sendMessageGroup(req, res) {
        try {
            const wassenger =  new Wassenger()
            const result = await wassenger.sendMessage(req.body.groupId, req.body.message)
            res.status(200).json(result);
        } catch (err) {
            return res.status(500).json({ status: 500, message: err.message });
        }
    }
}

module.exports = new WhatsappController()