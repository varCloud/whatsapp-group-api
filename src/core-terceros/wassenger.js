const fetch = require("node-fetch");

class Wassenger {
  constructor() {}
  async sendMessage(groupId, message) {
    {
      const API_TOKEN =
        "d42b00ef2e6b675147f8fca347b9e8484844230f36b5e0c156f2773f071c3a282c17b4a04e225141";
      const url = "https://api.wassenger.com/v1/messages";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Token: API_TOKEN,
        },
        body: `{"group":"${groupId}","message":"${message}"}`,
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
        return data;
      } catch (error) {
        console.error(`Error ${error}`);
      }
    }
  }
}

//120363317973470197@g.us

module.exports = Wassenger;
